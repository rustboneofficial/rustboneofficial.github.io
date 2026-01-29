import {
  BehaviorSubject,
  CommonModule,
  PLATFORM_ID,
  StorageService,
  TitleCasePipe,
  UpperCasePipe,
  __async,
  __commonJS,
  __spreadProps,
  __spreadValues,
  __toESM,
  isPlatformBrowser,
  output,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-4PF43QPQ.js";

// node_modules/qrcode/lib/can-promise.js
var require_can_promise = __commonJS({
  "node_modules/qrcode/lib/can-promise.js"(exports, module) {
    "use strict";
    module.exports = function() {
      return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
    };
  }
});

// node_modules/qrcode/lib/core/utils.js
var require_utils = __commonJS({
  "node_modules/qrcode/lib/core/utils.js"(exports) {
    "use strict";
    var toSJISFunction;
    var CODEWORDS_COUNT = [
      0,
      // Not used
      26,
      44,
      70,
      100,
      134,
      172,
      196,
      242,
      292,
      346,
      404,
      466,
      532,
      581,
      655,
      733,
      815,
      901,
      991,
      1085,
      1156,
      1258,
      1364,
      1474,
      1588,
      1706,
      1828,
      1921,
      2051,
      2185,
      2323,
      2465,
      2611,
      2761,
      2876,
      3034,
      3196,
      3362,
      3532,
      3706
    ];
    exports.getSymbolSize = function getSymbolSize(version) {
      if (!version)
        throw new Error('"version" cannot be null or undefined');
      if (version < 1 || version > 40)
        throw new Error('"version" should be in range from 1 to 40');
      return version * 4 + 17;
    };
    exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
      return CODEWORDS_COUNT[version];
    };
    exports.getBCHDigit = function(data) {
      let digit = 0;
      while (data !== 0) {
        digit++;
        data >>>= 1;
      }
      return digit;
    };
    exports.setToSJISFunction = function setToSJISFunction(f) {
      if (typeof f !== "function") {
        throw new Error('"toSJISFunc" is not a valid function.');
      }
      toSJISFunction = f;
    };
    exports.isKanjiModeEnabled = function() {
      return typeof toSJISFunction !== "undefined";
    };
    exports.toSJIS = function toSJIS(kanji) {
      return toSJISFunction(kanji);
    };
  }
});

// node_modules/qrcode/lib/core/error-correction-level.js
var require_error_correction_level = __commonJS({
  "node_modules/qrcode/lib/core/error-correction-level.js"(exports) {
    "use strict";
    exports.L = { bit: 1 };
    exports.M = { bit: 0 };
    exports.Q = { bit: 3 };
    exports.H = { bit: 2 };
    function fromString(string) {
      if (typeof string !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string.toLowerCase();
      switch (lcStr) {
        case "l":
        case "low":
          return exports.L;
        case "m":
        case "medium":
          return exports.M;
        case "q":
        case "quartile":
          return exports.Q;
        case "h":
        case "high":
          return exports.H;
        default:
          throw new Error("Unknown EC Level: " + string);
      }
    }
    exports.isValid = function isValid(level) {
      return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
    };
    exports.from = function from(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString(value);
      } catch (e) {
        return defaultValue;
      }
    };
  }
});

// node_modules/qrcode/lib/core/bit-buffer.js
var require_bit_buffer = __commonJS({
  "node_modules/qrcode/lib/core/bit-buffer.js"(exports, module) {
    "use strict";
    function BitBuffer() {
      this.buffer = [];
      this.length = 0;
    }
    BitBuffer.prototype = {
      get: function(index) {
        const bufIndex = Math.floor(index / 8);
        return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
      },
      put: function(num, length) {
        for (let i = 0; i < length; i++) {
          this.putBit((num >>> length - i - 1 & 1) === 1);
        }
      },
      getLengthInBits: function() {
        return this.length;
      },
      putBit: function(bit) {
        const bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) {
          this.buffer.push(0);
        }
        if (bit) {
          this.buffer[bufIndex] |= 128 >>> this.length % 8;
        }
        this.length++;
      }
    };
    module.exports = BitBuffer;
  }
});

// node_modules/qrcode/lib/core/bit-matrix.js
var require_bit_matrix = __commonJS({
  "node_modules/qrcode/lib/core/bit-matrix.js"(exports, module) {
    "use strict";
    function BitMatrix(size) {
      if (!size || size < 1) {
        throw new Error("BitMatrix size must be defined and greater than 0");
      }
      this.size = size;
      this.data = new Uint8Array(size * size);
      this.reservedBit = new Uint8Array(size * size);
    }
    BitMatrix.prototype.set = function(row, col, value, reserved) {
      const index = row * this.size + col;
      this.data[index] = value;
      if (reserved)
        this.reservedBit[index] = true;
    };
    BitMatrix.prototype.get = function(row, col) {
      return this.data[row * this.size + col];
    };
    BitMatrix.prototype.xor = function(row, col, value) {
      this.data[row * this.size + col] ^= value;
    };
    BitMatrix.prototype.isReserved = function(row, col) {
      return this.reservedBit[row * this.size + col];
    };
    module.exports = BitMatrix;
  }
});

// node_modules/qrcode/lib/core/alignment-pattern.js
var require_alignment_pattern = __commonJS({
  "node_modules/qrcode/lib/core/alignment-pattern.js"(exports) {
    "use strict";
    var getSymbolSize = require_utils().getSymbolSize;
    exports.getRowColCoords = function getRowColCoords(version) {
      if (version === 1)
        return [];
      const posCount = Math.floor(version / 7) + 2;
      const size = getSymbolSize(version);
      const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
      const positions = [size - 7];
      for (let i = 1; i < posCount - 1; i++) {
        positions[i] = positions[i - 1] - intervals;
      }
      positions.push(6);
      return positions.reverse();
    };
    exports.getPositions = function getPositions(version) {
      const coords = [];
      const pos = exports.getRowColCoords(version);
      const posLength = pos.length;
      for (let i = 0; i < posLength; i++) {
        for (let j = 0; j < posLength; j++) {
          if (i === 0 && j === 0 || // top-left
          i === 0 && j === posLength - 1 || // bottom-left
          i === posLength - 1 && j === 0) {
            continue;
          }
          coords.push([pos[i], pos[j]]);
        }
      }
      return coords;
    };
  }
});

// node_modules/qrcode/lib/core/finder-pattern.js
var require_finder_pattern = __commonJS({
  "node_modules/qrcode/lib/core/finder-pattern.js"(exports) {
    "use strict";
    var getSymbolSize = require_utils().getSymbolSize;
    var FINDER_PATTERN_SIZE = 7;
    exports.getPositions = function getPositions(version) {
      const size = getSymbolSize(version);
      return [
        // top-left
        [0, 0],
        // top-right
        [size - FINDER_PATTERN_SIZE, 0],
        // bottom-left
        [0, size - FINDER_PATTERN_SIZE]
      ];
    };
  }
});

// node_modules/qrcode/lib/core/mask-pattern.js
var require_mask_pattern = __commonJS({
  "node_modules/qrcode/lib/core/mask-pattern.js"(exports) {
    "use strict";
    exports.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    var PenaltyScores = {
      N1: 3,
      N2: 3,
      N3: 40,
      N4: 10
    };
    exports.isValid = function isValid(mask) {
      return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
    };
    exports.from = function from(value) {
      return exports.isValid(value) ? parseInt(value, 10) : void 0;
    };
    exports.getPenaltyN1 = function getPenaltyN1(data) {
      const size = data.size;
      let points = 0;
      let sameCountCol = 0;
      let sameCountRow = 0;
      let lastCol = null;
      let lastRow = null;
      for (let row = 0; row < size; row++) {
        sameCountCol = sameCountRow = 0;
        lastCol = lastRow = null;
        for (let col = 0; col < size; col++) {
          let module2 = data.get(row, col);
          if (module2 === lastCol) {
            sameCountCol++;
          } else {
            if (sameCountCol >= 5)
              points += PenaltyScores.N1 + (sameCountCol - 5);
            lastCol = module2;
            sameCountCol = 1;
          }
          module2 = data.get(col, row);
          if (module2 === lastRow) {
            sameCountRow++;
          } else {
            if (sameCountRow >= 5)
              points += PenaltyScores.N1 + (sameCountRow - 5);
            lastRow = module2;
            sameCountRow = 1;
          }
        }
        if (sameCountCol >= 5)
          points += PenaltyScores.N1 + (sameCountCol - 5);
        if (sameCountRow >= 5)
          points += PenaltyScores.N1 + (sameCountRow - 5);
      }
      return points;
    };
    exports.getPenaltyN2 = function getPenaltyN2(data) {
      const size = data.size;
      let points = 0;
      for (let row = 0; row < size - 1; row++) {
        for (let col = 0; col < size - 1; col++) {
          const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
          if (last === 4 || last === 0)
            points++;
        }
      }
      return points * PenaltyScores.N2;
    };
    exports.getPenaltyN3 = function getPenaltyN3(data) {
      const size = data.size;
      let points = 0;
      let bitsCol = 0;
      let bitsRow = 0;
      for (let row = 0; row < size; row++) {
        bitsCol = bitsRow = 0;
        for (let col = 0; col < size; col++) {
          bitsCol = bitsCol << 1 & 2047 | data.get(row, col);
          if (col >= 10 && (bitsCol === 1488 || bitsCol === 93))
            points++;
          bitsRow = bitsRow << 1 & 2047 | data.get(col, row);
          if (col >= 10 && (bitsRow === 1488 || bitsRow === 93))
            points++;
        }
      }
      return points * PenaltyScores.N3;
    };
    exports.getPenaltyN4 = function getPenaltyN4(data) {
      let darkCount = 0;
      const modulesCount = data.data.length;
      for (let i = 0; i < modulesCount; i++)
        darkCount += data.data[i];
      const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
      return k * PenaltyScores.N4;
    };
    function getMaskAt(maskPattern, i, j) {
      switch (maskPattern) {
        case exports.Patterns.PATTERN000:
          return (i + j) % 2 === 0;
        case exports.Patterns.PATTERN001:
          return i % 2 === 0;
        case exports.Patterns.PATTERN010:
          return j % 3 === 0;
        case exports.Patterns.PATTERN011:
          return (i + j) % 3 === 0;
        case exports.Patterns.PATTERN100:
          return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
        case exports.Patterns.PATTERN101:
          return i * j % 2 + i * j % 3 === 0;
        case exports.Patterns.PATTERN110:
          return (i * j % 2 + i * j % 3) % 2 === 0;
        case exports.Patterns.PATTERN111:
          return (i * j % 3 + (i + j) % 2) % 2 === 0;
        default:
          throw new Error("bad maskPattern:" + maskPattern);
      }
    }
    exports.applyMask = function applyMask(pattern, data) {
      const size = data.size;
      for (let col = 0; col < size; col++) {
        for (let row = 0; row < size; row++) {
          if (data.isReserved(row, col))
            continue;
          data.xor(row, col, getMaskAt(pattern, row, col));
        }
      }
    };
    exports.getBestMask = function getBestMask(data, setupFormatFunc) {
      const numPatterns = Object.keys(exports.Patterns).length;
      let bestPattern = 0;
      let lowerPenalty = Infinity;
      for (let p = 0; p < numPatterns; p++) {
        setupFormatFunc(p);
        exports.applyMask(p, data);
        const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
        exports.applyMask(p, data);
        if (penalty < lowerPenalty) {
          lowerPenalty = penalty;
          bestPattern = p;
        }
      }
      return bestPattern;
    };
  }
});

// node_modules/qrcode/lib/core/error-correction-code.js
var require_error_correction_code = __commonJS({
  "node_modules/qrcode/lib/core/error-correction-code.js"(exports) {
    "use strict";
    var ECLevel = require_error_correction_level();
    var EC_BLOCKS_TABLE = [
      // L  M  Q  H
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      1,
      2,
      2,
      4,
      1,
      2,
      4,
      4,
      2,
      4,
      4,
      4,
      2,
      4,
      6,
      5,
      2,
      4,
      6,
      6,
      2,
      5,
      8,
      8,
      4,
      5,
      8,
      8,
      4,
      5,
      8,
      11,
      4,
      8,
      10,
      11,
      4,
      9,
      12,
      16,
      4,
      9,
      16,
      16,
      6,
      10,
      12,
      18,
      6,
      10,
      17,
      16,
      6,
      11,
      16,
      19,
      6,
      13,
      18,
      21,
      7,
      14,
      21,
      25,
      8,
      16,
      20,
      25,
      8,
      17,
      23,
      25,
      9,
      17,
      23,
      34,
      9,
      18,
      25,
      30,
      10,
      20,
      27,
      32,
      12,
      21,
      29,
      35,
      12,
      23,
      34,
      37,
      12,
      25,
      34,
      40,
      13,
      26,
      35,
      42,
      14,
      28,
      38,
      45,
      15,
      29,
      40,
      48,
      16,
      31,
      43,
      51,
      17,
      33,
      45,
      54,
      18,
      35,
      48,
      57,
      19,
      37,
      51,
      60,
      19,
      38,
      53,
      63,
      20,
      40,
      56,
      66,
      21,
      43,
      59,
      70,
      22,
      45,
      62,
      74,
      24,
      47,
      65,
      77,
      25,
      49,
      68,
      81
    ];
    var EC_CODEWORDS_TABLE = [
      // L  M  Q  H
      7,
      10,
      13,
      17,
      10,
      16,
      22,
      28,
      15,
      26,
      36,
      44,
      20,
      36,
      52,
      64,
      26,
      48,
      72,
      88,
      36,
      64,
      96,
      112,
      40,
      72,
      108,
      130,
      48,
      88,
      132,
      156,
      60,
      110,
      160,
      192,
      72,
      130,
      192,
      224,
      80,
      150,
      224,
      264,
      96,
      176,
      260,
      308,
      104,
      198,
      288,
      352,
      120,
      216,
      320,
      384,
      132,
      240,
      360,
      432,
      144,
      280,
      408,
      480,
      168,
      308,
      448,
      532,
      180,
      338,
      504,
      588,
      196,
      364,
      546,
      650,
      224,
      416,
      600,
      700,
      224,
      442,
      644,
      750,
      252,
      476,
      690,
      816,
      270,
      504,
      750,
      900,
      300,
      560,
      810,
      960,
      312,
      588,
      870,
      1050,
      336,
      644,
      952,
      1110,
      360,
      700,
      1020,
      1200,
      390,
      728,
      1050,
      1260,
      420,
      784,
      1140,
      1350,
      450,
      812,
      1200,
      1440,
      480,
      868,
      1290,
      1530,
      510,
      924,
      1350,
      1620,
      540,
      980,
      1440,
      1710,
      570,
      1036,
      1530,
      1800,
      570,
      1064,
      1590,
      1890,
      600,
      1120,
      1680,
      1980,
      630,
      1204,
      1770,
      2100,
      660,
      1260,
      1860,
      2220,
      720,
      1316,
      1950,
      2310,
      750,
      1372,
      2040,
      2430
    ];
    exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
    exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
  }
});

// node_modules/qrcode/lib/core/galois-field.js
var require_galois_field = __commonJS({
  "node_modules/qrcode/lib/core/galois-field.js"(exports) {
    "use strict";
    var EXP_TABLE = new Uint8Array(512);
    var LOG_TABLE = new Uint8Array(256);
    (function initTables() {
      let x = 1;
      for (let i = 0; i < 255; i++) {
        EXP_TABLE[i] = x;
        LOG_TABLE[x] = i;
        x <<= 1;
        if (x & 256) {
          x ^= 285;
        }
      }
      for (let i = 255; i < 512; i++) {
        EXP_TABLE[i] = EXP_TABLE[i - 255];
      }
    })();
    exports.log = function log(n) {
      if (n < 1)
        throw new Error("log(" + n + ")");
      return LOG_TABLE[n];
    };
    exports.exp = function exp(n) {
      return EXP_TABLE[n];
    };
    exports.mul = function mul(x, y) {
      if (x === 0 || y === 0)
        return 0;
      return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
    };
  }
});

// node_modules/qrcode/lib/core/polynomial.js
var require_polynomial = __commonJS({
  "node_modules/qrcode/lib/core/polynomial.js"(exports) {
    "use strict";
    var GF = require_galois_field();
    exports.mul = function mul(p1, p2) {
      const coeff = new Uint8Array(p1.length + p2.length - 1);
      for (let i = 0; i < p1.length; i++) {
        for (let j = 0; j < p2.length; j++) {
          coeff[i + j] ^= GF.mul(p1[i], p2[j]);
        }
      }
      return coeff;
    };
    exports.mod = function mod(divident, divisor) {
      let result = new Uint8Array(divident);
      while (result.length - divisor.length >= 0) {
        const coeff = result[0];
        for (let i = 0; i < divisor.length; i++) {
          result[i] ^= GF.mul(divisor[i], coeff);
        }
        let offset = 0;
        while (offset < result.length && result[offset] === 0)
          offset++;
        result = result.slice(offset);
      }
      return result;
    };
    exports.generateECPolynomial = function generateECPolynomial(degree) {
      let poly = new Uint8Array([1]);
      for (let i = 0; i < degree; i++) {
        poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]));
      }
      return poly;
    };
  }
});

// node_modules/qrcode/lib/core/reed-solomon-encoder.js
var require_reed_solomon_encoder = __commonJS({
  "node_modules/qrcode/lib/core/reed-solomon-encoder.js"(exports, module) {
    "use strict";
    var Polynomial = require_polynomial();
    function ReedSolomonEncoder(degree) {
      this.genPoly = void 0;
      this.degree = degree;
      if (this.degree)
        this.initialize(this.degree);
    }
    ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
      this.degree = degree;
      this.genPoly = Polynomial.generateECPolynomial(this.degree);
    };
    ReedSolomonEncoder.prototype.encode = function encode(data) {
      if (!this.genPoly) {
        throw new Error("Encoder not initialized");
      }
      const paddedData = new Uint8Array(data.length + this.degree);
      paddedData.set(data);
      const remainder = Polynomial.mod(paddedData, this.genPoly);
      const start = this.degree - remainder.length;
      if (start > 0) {
        const buff = new Uint8Array(this.degree);
        buff.set(remainder, start);
        return buff;
      }
      return remainder;
    };
    module.exports = ReedSolomonEncoder;
  }
});

// node_modules/qrcode/lib/core/version-check.js
var require_version_check = __commonJS({
  "node_modules/qrcode/lib/core/version-check.js"(exports) {
    "use strict";
    exports.isValid = function isValid(version) {
      return !isNaN(version) && version >= 1 && version <= 40;
    };
  }
});

// node_modules/qrcode/lib/core/regex.js
var require_regex = __commonJS({
  "node_modules/qrcode/lib/core/regex.js"(exports) {
    "use strict";
    var numeric = "[0-9]+";
    var alphanumeric = "[A-Z $%*+\\-./:]+";
    var kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
    kanji = kanji.replace(/u/g, "\\u");
    var byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
    exports.KANJI = new RegExp(kanji, "g");
    exports.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
    exports.BYTE = new RegExp(byte, "g");
    exports.NUMERIC = new RegExp(numeric, "g");
    exports.ALPHANUMERIC = new RegExp(alphanumeric, "g");
    var TEST_KANJI = new RegExp("^" + kanji + "$");
    var TEST_NUMERIC = new RegExp("^" + numeric + "$");
    var TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
    exports.testKanji = function testKanji(str) {
      return TEST_KANJI.test(str);
    };
    exports.testNumeric = function testNumeric(str) {
      return TEST_NUMERIC.test(str);
    };
    exports.testAlphanumeric = function testAlphanumeric(str) {
      return TEST_ALPHANUMERIC.test(str);
    };
  }
});

// node_modules/qrcode/lib/core/mode.js
var require_mode = __commonJS({
  "node_modules/qrcode/lib/core/mode.js"(exports) {
    "use strict";
    var VersionCheck = require_version_check();
    var Regex = require_regex();
    exports.NUMERIC = {
      id: "Numeric",
      bit: 1 << 0,
      ccBits: [10, 12, 14]
    };
    exports.ALPHANUMERIC = {
      id: "Alphanumeric",
      bit: 1 << 1,
      ccBits: [9, 11, 13]
    };
    exports.BYTE = {
      id: "Byte",
      bit: 1 << 2,
      ccBits: [8, 16, 16]
    };
    exports.KANJI = {
      id: "Kanji",
      bit: 1 << 3,
      ccBits: [8, 10, 12]
    };
    exports.MIXED = {
      bit: -1
    };
    exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
      if (!mode.ccBits)
        throw new Error("Invalid mode: " + mode);
      if (!VersionCheck.isValid(version)) {
        throw new Error("Invalid version: " + version);
      }
      if (version >= 1 && version < 10)
        return mode.ccBits[0];
      else if (version < 27)
        return mode.ccBits[1];
      return mode.ccBits[2];
    };
    exports.getBestModeForData = function getBestModeForData(dataStr) {
      if (Regex.testNumeric(dataStr))
        return exports.NUMERIC;
      else if (Regex.testAlphanumeric(dataStr))
        return exports.ALPHANUMERIC;
      else if (Regex.testKanji(dataStr))
        return exports.KANJI;
      else
        return exports.BYTE;
    };
    exports.toString = function toString(mode) {
      if (mode && mode.id)
        return mode.id;
      throw new Error("Invalid mode");
    };
    exports.isValid = function isValid(mode) {
      return mode && mode.bit && mode.ccBits;
    };
    function fromString(string) {
      if (typeof string !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string.toLowerCase();
      switch (lcStr) {
        case "numeric":
          return exports.NUMERIC;
        case "alphanumeric":
          return exports.ALPHANUMERIC;
        case "kanji":
          return exports.KANJI;
        case "byte":
          return exports.BYTE;
        default:
          throw new Error("Unknown mode: " + string);
      }
    }
    exports.from = function from(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString(value);
      } catch (e) {
        return defaultValue;
      }
    };
  }
});

// node_modules/qrcode/lib/core/version.js
var require_version = __commonJS({
  "node_modules/qrcode/lib/core/version.js"(exports) {
    "use strict";
    var Utils = require_utils();
    var ECCode = require_error_correction_code();
    var ECLevel = require_error_correction_level();
    var Mode = require_mode();
    var VersionCheck = require_version_check();
    var G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
    var G18_BCH = Utils.getBCHDigit(G18);
    function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    function getReservedBitsCount(mode, version) {
      return Mode.getCharCountIndicator(mode, version) + 4;
    }
    function getTotalBitsFromDataArray(segments, version) {
      let totalBits = 0;
      segments.forEach(function(data) {
        const reservedBits = getReservedBitsCount(data.mode, version);
        totalBits += reservedBits + data.getBitsLength();
      });
      return totalBits;
    }
    function getBestVersionForMixedData(segments, errorCorrectionLevel) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        const length = getTotalBitsFromDataArray(segments, currentVersion);
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    exports.from = function from(value, defaultValue) {
      if (VersionCheck.isValid(value)) {
        return parseInt(value, 10);
      }
      return defaultValue;
    };
    exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
      if (!VersionCheck.isValid(version)) {
        throw new Error("Invalid QR Code version");
      }
      if (typeof mode === "undefined")
        mode = Mode.BYTE;
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (mode === Mode.MIXED)
        return dataTotalCodewordsBits;
      const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);
      switch (mode) {
        case Mode.NUMERIC:
          return Math.floor(usableBits / 10 * 3);
        case Mode.ALPHANUMERIC:
          return Math.floor(usableBits / 11 * 2);
        case Mode.KANJI:
          return Math.floor(usableBits / 13);
        case Mode.BYTE:
        default:
          return Math.floor(usableBits / 8);
      }
    };
    exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
      let seg;
      const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
      if (Array.isArray(data)) {
        if (data.length > 1) {
          return getBestVersionForMixedData(data, ecl);
        }
        if (data.length === 0) {
          return 1;
        }
        seg = data[0];
      } else {
        seg = data;
      }
      return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
    };
    exports.getEncodedBits = function getEncodedBits(version) {
      if (!VersionCheck.isValid(version) || version < 7) {
        throw new Error("Invalid QR Code version");
      }
      let d = version << 12;
      while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
        d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
      }
      return version << 12 | d;
    };
  }
});

// node_modules/qrcode/lib/core/format-info.js
var require_format_info = __commonJS({
  "node_modules/qrcode/lib/core/format-info.js"(exports) {
    "use strict";
    var Utils = require_utils();
    var G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
    var G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
    var G15_BCH = Utils.getBCHDigit(G15);
    exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
      const data = errorCorrectionLevel.bit << 3 | mask;
      let d = data << 10;
      while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
        d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
      }
      return (data << 10 | d) ^ G15_MASK;
    };
  }
});

// node_modules/qrcode/lib/core/numeric-data.js
var require_numeric_data = __commonJS({
  "node_modules/qrcode/lib/core/numeric-data.js"(exports, module) {
    "use strict";
    var Mode = require_mode();
    function NumericData(data) {
      this.mode = Mode.NUMERIC;
      this.data = data.toString();
    }
    NumericData.getBitsLength = function getBitsLength(length) {
      return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
    };
    NumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    NumericData.prototype.getBitsLength = function getBitsLength() {
      return NumericData.getBitsLength(this.data.length);
    };
    NumericData.prototype.write = function write(bitBuffer) {
      let i, group, value;
      for (i = 0; i + 3 <= this.data.length; i += 3) {
        group = this.data.substr(i, 3);
        value = parseInt(group, 10);
        bitBuffer.put(value, 10);
      }
      const remainingNum = this.data.length - i;
      if (remainingNum > 0) {
        group = this.data.substr(i);
        value = parseInt(group, 10);
        bitBuffer.put(value, remainingNum * 3 + 1);
      }
    };
    module.exports = NumericData;
  }
});

// node_modules/qrcode/lib/core/alphanumeric-data.js
var require_alphanumeric_data = __commonJS({
  "node_modules/qrcode/lib/core/alphanumeric-data.js"(exports, module) {
    "use strict";
    var Mode = require_mode();
    var ALPHA_NUM_CHARS = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      " ",
      "$",
      "%",
      "*",
      "+",
      "-",
      ".",
      "/",
      ":"
    ];
    function AlphanumericData(data) {
      this.mode = Mode.ALPHANUMERIC;
      this.data = data;
    }
    AlphanumericData.getBitsLength = function getBitsLength(length) {
      return 11 * Math.floor(length / 2) + 6 * (length % 2);
    };
    AlphanumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    AlphanumericData.prototype.getBitsLength = function getBitsLength() {
      return AlphanumericData.getBitsLength(this.data.length);
    };
    AlphanumericData.prototype.write = function write(bitBuffer) {
      let i;
      for (i = 0; i + 2 <= this.data.length; i += 2) {
        let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
        value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
        bitBuffer.put(value, 11);
      }
      if (this.data.length % 2) {
        bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
      }
    };
    module.exports = AlphanumericData;
  }
});

// node_modules/qrcode/lib/core/byte-data.js
var require_byte_data = __commonJS({
  "node_modules/qrcode/lib/core/byte-data.js"(exports, module) {
    "use strict";
    var Mode = require_mode();
    function ByteData(data) {
      this.mode = Mode.BYTE;
      if (typeof data === "string") {
        this.data = new TextEncoder().encode(data);
      } else {
        this.data = new Uint8Array(data);
      }
    }
    ByteData.getBitsLength = function getBitsLength(length) {
      return length * 8;
    };
    ByteData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    ByteData.prototype.getBitsLength = function getBitsLength() {
      return ByteData.getBitsLength(this.data.length);
    };
    ByteData.prototype.write = function(bitBuffer) {
      for (let i = 0, l = this.data.length; i < l; i++) {
        bitBuffer.put(this.data[i], 8);
      }
    };
    module.exports = ByteData;
  }
});

// node_modules/qrcode/lib/core/kanji-data.js
var require_kanji_data = __commonJS({
  "node_modules/qrcode/lib/core/kanji-data.js"(exports, module) {
    "use strict";
    var Mode = require_mode();
    var Utils = require_utils();
    function KanjiData(data) {
      this.mode = Mode.KANJI;
      this.data = data;
    }
    KanjiData.getBitsLength = function getBitsLength(length) {
      return length * 13;
    };
    KanjiData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    KanjiData.prototype.getBitsLength = function getBitsLength() {
      return KanjiData.getBitsLength(this.data.length);
    };
    KanjiData.prototype.write = function(bitBuffer) {
      let i;
      for (i = 0; i < this.data.length; i++) {
        let value = Utils.toSJIS(this.data[i]);
        if (value >= 33088 && value <= 40956) {
          value -= 33088;
        } else if (value >= 57408 && value <= 60351) {
          value -= 49472;
        } else {
          throw new Error(
            "Invalid SJIS character: " + this.data[i] + "\nMake sure your charset is UTF-8"
          );
        }
        value = (value >>> 8 & 255) * 192 + (value & 255);
        bitBuffer.put(value, 13);
      }
    };
    module.exports = KanjiData;
  }
});

// node_modules/dijkstrajs/dijkstra.js
var require_dijkstra = __commonJS({
  "node_modules/dijkstrajs/dijkstra.js"(exports, module) {
    "use strict";
    var dijkstra = {
      single_source_shortest_paths: function(graph, s, d) {
        var predecessors = {};
        var costs = {};
        costs[s] = 0;
        var open = dijkstra.PriorityQueue.make();
        open.push(s, 0);
        var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
        while (!open.empty()) {
          closest = open.pop();
          u = closest.value;
          cost_of_s_to_u = closest.cost;
          adjacent_nodes = graph[u] || {};
          for (v in adjacent_nodes) {
            if (adjacent_nodes.hasOwnProperty(v)) {
              cost_of_e = adjacent_nodes[v];
              cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
              cost_of_s_to_v = costs[v];
              first_visit = typeof costs[v] === "undefined";
              if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                costs[v] = cost_of_s_to_u_plus_cost_of_e;
                open.push(v, cost_of_s_to_u_plus_cost_of_e);
                predecessors[v] = u;
              }
            }
          }
        }
        if (typeof d !== "undefined" && typeof costs[d] === "undefined") {
          var msg = ["Could not find a path from ", s, " to ", d, "."].join("");
          throw new Error(msg);
        }
        return predecessors;
      },
      extract_shortest_path_from_predecessor_list: function(predecessors, d) {
        var nodes = [];
        var u = d;
        var predecessor;
        while (u) {
          nodes.push(u);
          predecessor = predecessors[u];
          u = predecessors[u];
        }
        nodes.reverse();
        return nodes;
      },
      find_path: function(graph, s, d) {
        var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
        return dijkstra.extract_shortest_path_from_predecessor_list(
          predecessors,
          d
        );
      },
      /**
       * A very naive priority queue implementation.
       */
      PriorityQueue: {
        make: function(opts) {
          var T = dijkstra.PriorityQueue, t = {}, key;
          opts = opts || {};
          for (key in T) {
            if (T.hasOwnProperty(key)) {
              t[key] = T[key];
            }
          }
          t.queue = [];
          t.sorter = opts.sorter || T.default_sorter;
          return t;
        },
        default_sorter: function(a, b) {
          return a.cost - b.cost;
        },
        /**
         * Add a new item to the queue and ensure the highest priority element
         * is at the front of the queue.
         */
        push: function(value, cost) {
          var item = { value, cost };
          this.queue.push(item);
          this.queue.sort(this.sorter);
        },
        /**
         * Return the highest priority element in the queue.
         */
        pop: function() {
          return this.queue.shift();
        },
        empty: function() {
          return this.queue.length === 0;
        }
      }
    };
    if (typeof module !== "undefined") {
      module.exports = dijkstra;
    }
  }
});

// node_modules/qrcode/lib/core/segments.js
var require_segments = __commonJS({
  "node_modules/qrcode/lib/core/segments.js"(exports) {
    "use strict";
    var Mode = require_mode();
    var NumericData = require_numeric_data();
    var AlphanumericData = require_alphanumeric_data();
    var ByteData = require_byte_data();
    var KanjiData = require_kanji_data();
    var Regex = require_regex();
    var Utils = require_utils();
    var dijkstra = require_dijkstra();
    function getStringByteLength(str) {
      return unescape(encodeURIComponent(str)).length;
    }
    function getSegments(regex, mode, str) {
      const segments = [];
      let result;
      while ((result = regex.exec(str)) !== null) {
        segments.push({
          data: result[0],
          index: result.index,
          mode,
          length: result[0].length
        });
      }
      return segments;
    }
    function getSegmentsFromString(dataStr) {
      const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
      const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
      let byteSegs;
      let kanjiSegs;
      if (Utils.isKanjiModeEnabled()) {
        byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
        kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
      } else {
        byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
        kanjiSegs = [];
      }
      const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
      return segs.sort(function(s1, s2) {
        return s1.index - s2.index;
      }).map(function(obj) {
        return {
          data: obj.data,
          mode: obj.mode,
          length: obj.length
        };
      });
    }
    function getSegmentBitsLength(length, mode) {
      switch (mode) {
        case Mode.NUMERIC:
          return NumericData.getBitsLength(length);
        case Mode.ALPHANUMERIC:
          return AlphanumericData.getBitsLength(length);
        case Mode.KANJI:
          return KanjiData.getBitsLength(length);
        case Mode.BYTE:
          return ByteData.getBitsLength(length);
      }
    }
    function mergeSegments(segs) {
      return segs.reduce(function(acc, curr) {
        const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
        if (prevSeg && prevSeg.mode === curr.mode) {
          acc[acc.length - 1].data += curr.data;
          return acc;
        }
        acc.push(curr);
        return acc;
      }, []);
    }
    function buildNodes(segs) {
      const nodes = [];
      for (let i = 0; i < segs.length; i++) {
        const seg = segs[i];
        switch (seg.mode) {
          case Mode.NUMERIC:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
              { data: seg.data, mode: Mode.BYTE, length: seg.length }
            ]);
            break;
          case Mode.ALPHANUMERIC:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.BYTE, length: seg.length }
            ]);
            break;
          case Mode.KANJI:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
            ]);
            break;
          case Mode.BYTE:
            nodes.push([
              { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
            ]);
        }
      }
      return nodes;
    }
    function buildGraph(nodes, version) {
      const table = {};
      const graph = { start: {} };
      let prevNodeIds = ["start"];
      for (let i = 0; i < nodes.length; i++) {
        const nodeGroup = nodes[i];
        const currentNodeIds = [];
        for (let j = 0; j < nodeGroup.length; j++) {
          const node = nodeGroup[j];
          const key = "" + i + j;
          currentNodeIds.push(key);
          table[key] = { node, lastCount: 0 };
          graph[key] = {};
          for (let n = 0; n < prevNodeIds.length; n++) {
            const prevNodeId = prevNodeIds[n];
            if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
              graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
              table[prevNodeId].lastCount += node.length;
            } else {
              if (table[prevNodeId])
                table[prevNodeId].lastCount = node.length;
              graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version);
            }
          }
        }
        prevNodeIds = currentNodeIds;
      }
      for (let n = 0; n < prevNodeIds.length; n++) {
        graph[prevNodeIds[n]].end = 0;
      }
      return { map: graph, table };
    }
    function buildSingleSegment(data, modesHint) {
      let mode;
      const bestMode = Mode.getBestModeForData(data);
      mode = Mode.from(modesHint, bestMode);
      if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
        throw new Error('"' + data + '" cannot be encoded with mode ' + Mode.toString(mode) + ".\n Suggested mode is: " + Mode.toString(bestMode));
      }
      if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
        mode = Mode.BYTE;
      }
      switch (mode) {
        case Mode.NUMERIC:
          return new NumericData(data);
        case Mode.ALPHANUMERIC:
          return new AlphanumericData(data);
        case Mode.KANJI:
          return new KanjiData(data);
        case Mode.BYTE:
          return new ByteData(data);
      }
    }
    exports.fromArray = function fromArray(array) {
      return array.reduce(function(acc, seg) {
        if (typeof seg === "string") {
          acc.push(buildSingleSegment(seg, null));
        } else if (seg.data) {
          acc.push(buildSingleSegment(seg.data, seg.mode));
        }
        return acc;
      }, []);
    };
    exports.fromString = function fromString(data, version) {
      const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
      const nodes = buildNodes(segs);
      const graph = buildGraph(nodes, version);
      const path = dijkstra.find_path(graph.map, "start", "end");
      const optimizedSegs = [];
      for (let i = 1; i < path.length - 1; i++) {
        optimizedSegs.push(graph.table[path[i]].node);
      }
      return exports.fromArray(mergeSegments(optimizedSegs));
    };
    exports.rawSplit = function rawSplit(data) {
      return exports.fromArray(
        getSegmentsFromString(data, Utils.isKanjiModeEnabled())
      );
    };
  }
});

// node_modules/qrcode/lib/core/qrcode.js
var require_qrcode = __commonJS({
  "node_modules/qrcode/lib/core/qrcode.js"(exports) {
    "use strict";
    var Utils = require_utils();
    var ECLevel = require_error_correction_level();
    var BitBuffer = require_bit_buffer();
    var BitMatrix = require_bit_matrix();
    var AlignmentPattern = require_alignment_pattern();
    var FinderPattern = require_finder_pattern();
    var MaskPattern = require_mask_pattern();
    var ECCode = require_error_correction_code();
    var ReedSolomonEncoder = require_reed_solomon_encoder();
    var Version = require_version();
    var FormatInfo = require_format_info();
    var Mode = require_mode();
    var Segments = require_segments();
    function setupFinderPattern(matrix, version) {
      const size = matrix.size;
      const pos = FinderPattern.getPositions(version);
      for (let i = 0; i < pos.length; i++) {
        const row = pos[i][0];
        const col = pos[i][1];
        for (let r = -1; r <= 7; r++) {
          if (row + r <= -1 || size <= row + r)
            continue;
          for (let c = -1; c <= 7; c++) {
            if (col + c <= -1 || size <= col + c)
              continue;
            if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) {
              matrix.set(row + r, col + c, true, true);
            } else {
              matrix.set(row + r, col + c, false, true);
            }
          }
        }
      }
    }
    function setupTimingPattern(matrix) {
      const size = matrix.size;
      for (let r = 8; r < size - 8; r++) {
        const value = r % 2 === 0;
        matrix.set(r, 6, value, true);
        matrix.set(6, r, value, true);
      }
    }
    function setupAlignmentPattern(matrix, version) {
      const pos = AlignmentPattern.getPositions(version);
      for (let i = 0; i < pos.length; i++) {
        const row = pos[i][0];
        const col = pos[i][1];
        for (let r = -2; r <= 2; r++) {
          for (let c = -2; c <= 2; c++) {
            if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
              matrix.set(row + r, col + c, true, true);
            } else {
              matrix.set(row + r, col + c, false, true);
            }
          }
        }
      }
    }
    function setupVersionInfo(matrix, version) {
      const size = matrix.size;
      const bits = Version.getEncodedBits(version);
      let row, col, mod;
      for (let i = 0; i < 18; i++) {
        row = Math.floor(i / 3);
        col = i % 3 + size - 8 - 3;
        mod = (bits >> i & 1) === 1;
        matrix.set(row, col, mod, true);
        matrix.set(col, row, mod, true);
      }
    }
    function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
      const size = matrix.size;
      const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
      let i, mod;
      for (i = 0; i < 15; i++) {
        mod = (bits >> i & 1) === 1;
        if (i < 6) {
          matrix.set(i, 8, mod, true);
        } else if (i < 8) {
          matrix.set(i + 1, 8, mod, true);
        } else {
          matrix.set(size - 15 + i, 8, mod, true);
        }
        if (i < 8) {
          matrix.set(8, size - i - 1, mod, true);
        } else if (i < 9) {
          matrix.set(8, 15 - i - 1 + 1, mod, true);
        } else {
          matrix.set(8, 15 - i - 1, mod, true);
        }
      }
      matrix.set(size - 8, 8, 1, true);
    }
    function setupData(matrix, data) {
      const size = matrix.size;
      let inc = -1;
      let row = size - 1;
      let bitIndex = 7;
      let byteIndex = 0;
      for (let col = size - 1; col > 0; col -= 2) {
        if (col === 6)
          col--;
        while (true) {
          for (let c = 0; c < 2; c++) {
            if (!matrix.isReserved(row, col - c)) {
              let dark = false;
              if (byteIndex < data.length) {
                dark = (data[byteIndex] >>> bitIndex & 1) === 1;
              }
              matrix.set(row, col - c, dark);
              bitIndex--;
              if (bitIndex === -1) {
                byteIndex++;
                bitIndex = 7;
              }
            }
          }
          row += inc;
          if (row < 0 || size <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    }
    function createData(version, errorCorrectionLevel, segments) {
      const buffer = new BitBuffer();
      segments.forEach(function(data) {
        buffer.put(data.mode.bit, 4);
        buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));
        data.write(buffer);
      });
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
        buffer.put(0, 4);
      }
      while (buffer.getLengthInBits() % 8 !== 0) {
        buffer.putBit(0);
      }
      const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
      for (let i = 0; i < remainingByte; i++) {
        buffer.put(i % 2 ? 17 : 236, 8);
      }
      return createCodewords(buffer, version, errorCorrectionLevel);
    }
    function createCodewords(bitBuffer, version, errorCorrectionLevel) {
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewords = totalCodewords - ecTotalCodewords;
      const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);
      const blocksInGroup2 = totalCodewords % ecTotalBlocks;
      const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
      const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
      const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
      const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
      const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
      const rs = new ReedSolomonEncoder(ecCount);
      let offset = 0;
      const dcData = new Array(ecTotalBlocks);
      const ecData = new Array(ecTotalBlocks);
      let maxDataSize = 0;
      const buffer = new Uint8Array(bitBuffer.buffer);
      for (let b = 0; b < ecTotalBlocks; b++) {
        const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
        dcData[b] = buffer.slice(offset, offset + dataSize);
        ecData[b] = rs.encode(dcData[b]);
        offset += dataSize;
        maxDataSize = Math.max(maxDataSize, dataSize);
      }
      const data = new Uint8Array(totalCodewords);
      let index = 0;
      let i, r;
      for (i = 0; i < maxDataSize; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
          if (i < dcData[r].length) {
            data[index++] = dcData[r][i];
          }
        }
      }
      for (i = 0; i < ecCount; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
          data[index++] = ecData[r][i];
        }
      }
      return data;
    }
    function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
      let segments;
      if (Array.isArray(data)) {
        segments = Segments.fromArray(data);
      } else if (typeof data === "string") {
        let estimatedVersion = version;
        if (!estimatedVersion) {
          const rawSegments = Segments.rawSplit(data);
          estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
        }
        segments = Segments.fromString(data, estimatedVersion || 40);
      } else {
        throw new Error("Invalid data");
      }
      const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
      if (!bestVersion) {
        throw new Error("The amount of data is too big to be stored in a QR Code");
      }
      if (!version) {
        version = bestVersion;
      } else if (version < bestVersion) {
        throw new Error(
          "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n"
        );
      }
      const dataBits = createData(version, errorCorrectionLevel, segments);
      const moduleCount = Utils.getSymbolSize(version);
      const modules = new BitMatrix(moduleCount);
      setupFinderPattern(modules, version);
      setupTimingPattern(modules);
      setupAlignmentPattern(modules, version);
      setupFormatInfo(modules, errorCorrectionLevel, 0);
      if (version >= 7) {
        setupVersionInfo(modules, version);
      }
      setupData(modules, dataBits);
      if (isNaN(maskPattern)) {
        maskPattern = MaskPattern.getBestMask(
          modules,
          setupFormatInfo.bind(null, modules, errorCorrectionLevel)
        );
      }
      MaskPattern.applyMask(maskPattern, modules);
      setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
      return {
        modules,
        version,
        errorCorrectionLevel,
        maskPattern,
        segments
      };
    }
    exports.create = function create(data, options) {
      if (typeof data === "undefined" || data === "") {
        throw new Error("No input text");
      }
      let errorCorrectionLevel = ECLevel.M;
      let version;
      let mask;
      if (typeof options !== "undefined") {
        errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
        version = Version.from(options.version);
        mask = MaskPattern.from(options.maskPattern);
        if (options.toSJISFunc) {
          Utils.setToSJISFunction(options.toSJISFunc);
        }
      }
      return createSymbol(data, version, errorCorrectionLevel, mask);
    };
  }
});

// node_modules/qrcode/lib/renderer/utils.js
var require_utils2 = __commonJS({
  "node_modules/qrcode/lib/renderer/utils.js"(exports) {
    "use strict";
    function hex2rgba(hex) {
      if (typeof hex === "number") {
        hex = hex.toString();
      }
      if (typeof hex !== "string") {
        throw new Error("Color should be defined as hex string");
      }
      let hexCode = hex.slice().replace("#", "").split("");
      if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
        throw new Error("Invalid hex color: " + hex);
      }
      if (hexCode.length === 3 || hexCode.length === 4) {
        hexCode = Array.prototype.concat.apply([], hexCode.map(function(c) {
          return [c, c];
        }));
      }
      if (hexCode.length === 6)
        hexCode.push("F", "F");
      const hexValue = parseInt(hexCode.join(""), 16);
      return {
        r: hexValue >> 24 & 255,
        g: hexValue >> 16 & 255,
        b: hexValue >> 8 & 255,
        a: hexValue & 255,
        hex: "#" + hexCode.slice(0, 6).join("")
      };
    }
    exports.getOptions = function getOptions(options) {
      if (!options)
        options = {};
      if (!options.color)
        options.color = {};
      const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
      const width = options.width && options.width >= 21 ? options.width : void 0;
      const scale = options.scale || 4;
      return {
        width,
        scale: width ? 4 : scale,
        margin,
        color: {
          dark: hex2rgba(options.color.dark || "#000000ff"),
          light: hex2rgba(options.color.light || "#ffffffff")
        },
        type: options.type,
        rendererOpts: options.rendererOpts || {}
      };
    };
    exports.getScale = function getScale(qrSize, opts) {
      return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
    };
    exports.getImageWidth = function getImageWidth(qrSize, opts) {
      const scale = exports.getScale(qrSize, opts);
      return Math.floor((qrSize + opts.margin * 2) * scale);
    };
    exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
      const size = qr.modules.size;
      const data = qr.modules.data;
      const scale = exports.getScale(size, opts);
      const symbolSize = Math.floor((size + opts.margin * 2) * scale);
      const scaledMargin = opts.margin * scale;
      const palette = [opts.color.light, opts.color.dark];
      for (let i = 0; i < symbolSize; i++) {
        for (let j = 0; j < symbolSize; j++) {
          let posDst = (i * symbolSize + j) * 4;
          let pxColor = opts.color.light;
          if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
            const iSrc = Math.floor((i - scaledMargin) / scale);
            const jSrc = Math.floor((j - scaledMargin) / scale);
            pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
          }
          imgData[posDst++] = pxColor.r;
          imgData[posDst++] = pxColor.g;
          imgData[posDst++] = pxColor.b;
          imgData[posDst] = pxColor.a;
        }
      }
    };
  }
});

// node_modules/qrcode/lib/renderer/canvas.js
var require_canvas = __commonJS({
  "node_modules/qrcode/lib/renderer/canvas.js"(exports) {
    "use strict";
    var Utils = require_utils2();
    function clearCanvas(ctx, canvas, size) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!canvas.style)
        canvas.style = {};
      canvas.height = size;
      canvas.width = size;
      canvas.style.height = size + "px";
      canvas.style.width = size + "px";
    }
    function getCanvasElement() {
      try {
        return document.createElement("canvas");
      } catch (e) {
        throw new Error("You need to specify a canvas element");
      }
    }
    exports.render = function render(qrData, canvas, options) {
      let opts = options;
      let canvasEl = canvas;
      if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = void 0;
      }
      if (!canvas) {
        canvasEl = getCanvasElement();
      }
      opts = Utils.getOptions(opts);
      const size = Utils.getImageWidth(qrData.modules.size, opts);
      const ctx = canvasEl.getContext("2d");
      const image = ctx.createImageData(size, size);
      Utils.qrToImageData(image.data, qrData, opts);
      clearCanvas(ctx, canvasEl, size);
      ctx.putImageData(image, 0, 0);
      return canvasEl;
    };
    exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
      let opts = options;
      if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = void 0;
      }
      if (!opts)
        opts = {};
      const canvasEl = exports.render(qrData, canvas, opts);
      const type = opts.type || "image/png";
      const rendererOpts = opts.rendererOpts || {};
      return canvasEl.toDataURL(type, rendererOpts.quality);
    };
  }
});

// node_modules/qrcode/lib/renderer/svg-tag.js
var require_svg_tag = __commonJS({
  "node_modules/qrcode/lib/renderer/svg-tag.js"(exports) {
    "use strict";
    var Utils = require_utils2();
    function getColorAttrib(color, attrib) {
      const alpha = color.a / 255;
      const str = attrib + '="' + color.hex + '"';
      return alpha < 1 ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
    }
    function svgCmd(cmd, x, y) {
      let str = cmd + x;
      if (typeof y !== "undefined")
        str += " " + y;
      return str;
    }
    function qrToPath(data, size, margin) {
      let path = "";
      let moveBy = 0;
      let newRow = false;
      let lineLength = 0;
      for (let i = 0; i < data.length; i++) {
        const col = Math.floor(i % size);
        const row = Math.floor(i / size);
        if (!col && !newRow)
          newRow = true;
        if (data[i]) {
          lineLength++;
          if (!(i > 0 && col > 0 && data[i - 1])) {
            path += newRow ? svgCmd("M", col + margin, 0.5 + row + margin) : svgCmd("m", moveBy, 0);
            moveBy = 0;
            newRow = false;
          }
          if (!(col + 1 < size && data[i + 1])) {
            path += svgCmd("h", lineLength);
            lineLength = 0;
          }
        } else {
          moveBy++;
        }
      }
      return path;
    }
    exports.render = function render(qrData, options, cb) {
      const opts = Utils.getOptions(options);
      const size = qrData.modules.size;
      const data = qrData.modules.data;
      const qrcodesize = size + opts.margin * 2;
      const bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + ' d="M0 0h' + qrcodesize + "v" + qrcodesize + 'H0z"/>';
      const path = "<path " + getColorAttrib(opts.color.dark, "stroke") + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
      const viewBox = 'viewBox="0 0 ' + qrcodesize + " " + qrcodesize + '"';
      const width = !opts.width ? "" : 'width="' + opts.width + '" height="' + opts.width + '" ';
      const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + "</svg>\n";
      if (typeof cb === "function") {
        cb(null, svgTag);
      }
      return svgTag;
    };
  }
});

// node_modules/qrcode/lib/browser.js
var require_browser = __commonJS({
  "node_modules/qrcode/lib/browser.js"(exports) {
    "use strict";
    var canPromise = require_can_promise();
    var QRCode2 = require_qrcode();
    var CanvasRenderer = require_canvas();
    var SvgRenderer = require_svg_tag();
    function renderCanvas(renderFunc, canvas, text, opts, cb) {
      const args = [].slice.call(arguments, 1);
      const argsNum = args.length;
      const isLastArgCb = typeof args[argsNum - 1] === "function";
      if (!isLastArgCb && !canPromise()) {
        throw new Error("Callback required as last argument");
      }
      if (isLastArgCb) {
        if (argsNum < 2) {
          throw new Error("Too few arguments provided");
        }
        if (argsNum === 2) {
          cb = text;
          text = canvas;
          canvas = opts = void 0;
        } else if (argsNum === 3) {
          if (canvas.getContext && typeof cb === "undefined") {
            cb = opts;
            opts = void 0;
          } else {
            cb = opts;
            opts = text;
            text = canvas;
            canvas = void 0;
          }
        }
      } else {
        if (argsNum < 1) {
          throw new Error("Too few arguments provided");
        }
        if (argsNum === 1) {
          text = canvas;
          canvas = opts = void 0;
        } else if (argsNum === 2 && !canvas.getContext) {
          opts = text;
          text = canvas;
          canvas = void 0;
        }
        return new Promise(function(resolve, reject) {
          try {
            const data = QRCode2.create(text, opts);
            resolve(renderFunc(data, canvas, opts));
          } catch (e) {
            reject(e);
          }
        });
      }
      try {
        const data = QRCode2.create(text, opts);
        cb(null, renderFunc(data, canvas, opts));
      } catch (e) {
        cb(e);
      }
    }
    exports.create = QRCode2.create;
    exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
    exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
    exports.toString = renderCanvas.bind(null, function(data, _, opts) {
      return SvgRenderer.render(data, opts);
    });
  }
});

// src/app/services/cloud-sync.service.ts
var CloudSyncService = class _CloudSyncService {
  constructor(storageService, platformId) {
    this.storageService = storageService;
    this.platformId = platformId;
    this.SAVE_FILE_NAME = "rustbone_save.json";
    this.DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
    this.SCOPES = "https://www.googleapis.com/auth/drive.appdata";
    this.AUTH_STORAGE_KEY = "rustbone_google_auth";
    this.CLIENT_ID = "DEPRECATED_USE_CLOUD_SAVE_SERVICE";
    this.syncStateSubject = new BehaviorSubject({
      status: "idle"
    });
    this.syncState$ = this.syncStateSubject.asObservable();
    this.isGapiLoaded = false;
    this.isAuthenticated = false;
    this.currentUser = null;
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.initializeGapi();
    }
  }
  /**
   * Initialize Google API client
   */
  initializeGapi() {
    return __async(this, null, function* () {
      try {
        if (!this.CLIENT_ID || this.CLIENT_ID.includes("YOUR_GOOGLE_CLIENT_ID")) {
          console.warn("\u26A0\uFE0F Google Client ID not configured. Please follow the setup guide in web/docs/GOOGLE_OAUTH_SETUP.md");
          this.updateSyncState({
            status: "error",
            errorMessage: "Google OAuth not configured. Check console for setup instructions."
          });
          return;
        }
        yield this.loadGapiScript();
        yield new Promise((resolve, reject) => {
          gapi.load("client:auth2", {
            callback: resolve,
            onerror: reject
          });
        });
        yield gapi.client.init({
          clientId: this.CLIENT_ID,
          scope: this.SCOPES,
          discoveryDocs: this.DISCOVERY_DOCS
        });
        this.isGapiLoaded = true;
        console.log("\u2705 Google Drive API initialized successfully");
        const authInstance = gapi.auth2.getAuthInstance();
        if (authInstance.isSignedIn.get()) {
          yield this.handleSignIn();
          console.log("\u2705 Auto-login successful");
        }
      } catch (error) {
        console.error("\u274C Failed to initialize Google API:", error);
        this.updateSyncState({ status: "error", errorMessage: "Failed to initialize Google Drive" });
      }
    });
  }
  /**
   * Load Google API script
   */
  loadGapiScript() {
    return new Promise((resolve, reject) => {
      if (!this.isBrowser) {
        reject(new Error("Cannot load GAPI script on server"));
        return;
      }
      if (typeof gapi !== "undefined") {
        resolve();
        return;
      }
      const script = document.createElement("script");
      script.src = "https://apis.google.com/js/api.js";
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load Google API script"));
      document.head.appendChild(script);
    });
  }
  /**
   * Authenticate user with Google
   */
  authenticate() {
    return __async(this, null, function* () {
      if (!this.isGapiLoaded) {
        throw new Error("Google API not loaded");
      }
      try {
        const authInstance = gapi.auth2.getAuthInstance();
        if (authInstance.isSignedIn.get()) {
          yield this.handleSignIn();
          return true;
        }
        const googleUser = yield authInstance.signIn({
          prompt: "select_account"
          // Allow user to choose account
        });
        if (googleUser.isSignedIn()) {
          yield this.handleSignIn();
          return true;
        }
        return false;
      } catch (error) {
        console.error("Authentication failed:", error);
        const errorMessage = this.getAuthErrorMessage(error);
        this.updateSyncState({ status: "error", errorMessage });
        return false;
      }
    });
  }
  /**
   * Handle successful sign-in
   */
  handleSignIn() {
    return __async(this, null, function* () {
      try {
        const authInstance = gapi.auth2.getAuthInstance();
        const googleUser = authInstance.currentUser.get();
        const profile = googleUser.getBasicProfile();
        const authResponse = googleUser.getAuthResponse(true);
        this.currentUser = {
          id: profile.getId(),
          email: profile.getEmail(),
          name: profile.getName(),
          imageUrl: profile.getImageUrl(),
          accessToken: authResponse.access_token,
          expiresAt: authResponse.expires_at
        };
        this.isAuthenticated = true;
        if (this.isBrowser) {
          localStorage.setItem(this.AUTH_STORAGE_KEY, JSON.stringify({
            timestamp: Date.now(),
            userId: this.currentUser.id
          }));
        }
        console.log("Successfully authenticated:", this.currentUser.name);
        yield this.performInitialSync();
      } catch (error) {
        console.error("Failed to handle sign-in:", error);
        throw error;
      }
    });
  }
  /**
   * Get friendly error message from Google Auth error
   */
  getAuthErrorMessage(error) {
    if (error?.error === "popup_closed_by_user") {
      return "Sign-in cancelled";
    }
    if (error?.error === "access_denied") {
      return "Access denied by user";
    }
    if (error?.error === "immediate_failed") {
      return "Silent sign-in failed";
    }
    return "Authentication failed: " + (error?.error || "Unknown error");
  }
  /**
   * Sign out from Google
   */
  signOut() {
    return __async(this, null, function* () {
      if (this.isGapiLoaded) {
        try {
          const authInstance = gapi.auth2.getAuthInstance();
          yield authInstance.signOut();
          this.isAuthenticated = false;
          this.currentUser = null;
          if (this.isBrowser) {
            localStorage.removeItem(this.AUTH_STORAGE_KEY);
          }
          this.updateSyncState({ status: "idle", lastSyncTime: void 0 });
          console.log("Successfully signed out");
        } catch (error) {
          console.error("Sign out failed:", error);
          throw error;
        }
      }
    });
  }
  /**
   * Check if user is authenticated
   */
  isUserAuthenticated() {
    return this.isAuthenticated;
  }
  /**
   * Get current user profile
   */
  getCurrentUser() {
    return this.currentUser;
  }
  /**
   * Get current access token
   */
  getAccessToken() {
    if (!this.currentUser) {
      return null;
    }
    if (this.currentUser.expiresAt && Date.now() > this.currentUser.expiresAt) {
      console.warn("Access token expired, refreshing...");
      this.refreshAccessToken();
    }
    return this.currentUser.accessToken;
  }
  /**
   * Refresh access token
   */
  refreshAccessToken() {
    return __async(this, null, function* () {
      try {
        if (!this.isGapiLoaded) {
          throw new Error("Google API not loaded");
        }
        const authInstance = gapi.auth2.getAuthInstance();
        const googleUser = authInstance.currentUser.get();
        const authResponse = yield googleUser.reloadAuthResponse();
        if (this.currentUser) {
          this.currentUser.accessToken = authResponse.access_token;
          this.currentUser.expiresAt = authResponse.expires_at;
          console.log("Access token refreshed");
        }
      } catch (error) {
        console.error("Failed to refresh token:", error);
        this.isAuthenticated = false;
        this.currentUser = null;
        this.updateSyncState({
          status: "error",
          errorMessage: "Session expired. Please sign in again."
        });
      }
    });
  }
  /**
   * Perform initial sync on authentication
   */
  performInitialSync() {
    return __async(this, null, function* () {
      this.updateSyncState({ status: "syncing" });
      try {
        const cloudSave = yield this.downloadSaveState();
        const localSave = this.storageService.getCurrentSaveState();
        if (cloudSave && localSave) {
          yield this.resolveConflict(localSave, cloudSave);
        } else if (cloudSave && !localSave) {
          this.storageService.importSaveState(cloudSave);
        } else if (localSave && !cloudSave) {
          yield this.uploadSaveState(localSave);
        }
        this.updateSyncState({
          status: "idle",
          lastSyncTime: Date.now()
        });
      } catch (error) {
        console.error("Initial sync failed:", error);
        this.updateSyncState({
          status: "error",
          errorMessage: "Sync failed: " + error.message
        });
      }
    });
  }
  /**
   * Download save state from Google Drive
   */
  downloadSaveState() {
    return __async(this, null, function* () {
      try {
        const response = yield gapi.client.drive.files.list({
          q: `name='${this.SAVE_FILE_NAME}' and parents in 'appDataFolder'`,
          spaces: "appDataFolder"
        });
        const files = response.result.files;
        if (!files || files.length === 0) {
          return null;
        }
        const fileId = files[0].id;
        const fileResponse = yield gapi.client.drive.files.get({
          fileId,
          alt: "media"
        });
        return JSON.parse(fileResponse.body);
      } catch (error) {
        console.error("Failed to download save state:", error);
        throw error;
      }
    });
  }
  /**
   * Upload save state to Google Drive
   */
  uploadSaveState(saveState) {
    return __async(this, null, function* () {
      try {
        const searchResponse = yield gapi.client.drive.files.list({
          q: `name='${this.SAVE_FILE_NAME}' and parents in 'appDataFolder'`,
          spaces: "appDataFolder"
        });
        const saveData = JSON.stringify(saveState);
        const metadata = {
          name: this.SAVE_FILE_NAME,
          parents: ["appDataFolder"]
        };
        if (searchResponse.result.files && searchResponse.result.files.length > 0) {
          const fileId = searchResponse.result.files[0].id;
          yield gapi.client.request({
            path: `https://www.googleapis.com/upload/drive/v3/files/${fileId}`,
            method: "PATCH",
            params: { uploadType: "media" },
            headers: { "Content-Type": "application/json" },
            body: saveData
          });
        } else {
          yield gapi.client.request({
            path: "https://www.googleapis.com/upload/drive/v3/files",
            method: "POST",
            params: { uploadType: "multipart" },
            headers: { "Content-Type": 'multipart/related; boundary="foo_bar_baz"' },
            body: this.createMultipartBody(metadata, saveData)
          });
        }
        console.log("Save state uploaded to cloud");
      } catch (error) {
        console.error("Failed to upload save state:", error);
        throw error;
      }
    });
  }
  /**
   * Create multipart body for file upload
   */
  createMultipartBody(metadata, data) {
    const delimiter = "foo_bar_baz";
    let body = "";
    body += `--${delimiter}\r
`;
    body += "Content-Type: application/json\r\n\r\n";
    body += JSON.stringify(metadata) + "\r\n";
    body += `--${delimiter}\r
`;
    body += "Content-Type: application/json\r\n\r\n";
    body += data;
    body += `\r
--${delimiter}--`;
    return body;
  }
  /**
   * Resolve conflict between local and cloud saves
   */
  resolveConflict(localSave, cloudSave) {
    return __async(this, null, function* () {
      const localTime = localSave.lastModified;
      const cloudTime = cloudSave.lastModified;
      if (Math.abs(localTime - cloudTime) < 1e3) {
        return;
      }
      if (cloudTime > localTime) {
        this.updateSyncState({
          status: "conflict",
          hasConflict: true
        });
        this.storageService.importSaveState(cloudSave);
        console.log("Resolved conflict: using cloud save (newer)");
      } else {
        yield this.uploadSaveState(localSave);
        console.log("Resolved conflict: uploaded local save (newer)");
      }
    });
  }
  /**
   * Manual sync trigger
   */
  syncNow() {
    return __async(this, null, function* () {
      if (!this.isAuthenticated) {
        throw new Error("Not authenticated");
      }
      const localSave = this.storageService.getCurrentSaveState();
      if (localSave) {
        this.updateSyncState({ status: "syncing" });
        try {
          yield this.uploadSaveState(localSave);
          this.updateSyncState({
            status: "idle",
            lastSyncTime: Date.now()
          });
        } catch (error) {
          this.updateSyncState({
            status: "error",
            errorMessage: error.message
          });
          throw error;
        }
      }
    });
  }
  /**
   * Update sync state
   */
  updateSyncState(state) {
    const currentState = this.syncStateSubject.value;
    this.syncStateSubject.next(__spreadValues(__spreadValues({}, currentState), state));
  }
  /**
   * Get current sync status
   */
  getCurrentSyncState() {
    return this.syncStateSubject.value;
  }
  static {
    this.\u0275fac = function CloudSyncService_Factory(t) {
      return new (t || _CloudSyncService)(\u0275\u0275inject(StorageService), \u0275\u0275inject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CloudSyncService, factory: _CloudSyncService.\u0275fac, providedIn: "root" });
  }
};

// src/app/services/worker.service.ts
var import_qrcode = __toESM(require_browser());
var WorkerService = class _WorkerService {
  constructor(storageService) {
    this.storageService = storageService;
  }
  /**
   * Generate a complete worker profile from basic info
   */
  generateWorkerProfile(name) {
    return __async(this, null, function* () {
      const workerId = this.generateWorkerID();
      const zone = this.determineWorkerZone(name);
      const clearanceLevel = this.determineClearanceLevel(name);
      const department = this.determineDepartment(name);
      const role = this.determineRole(department);
      const biometricHash = this.generateBiometricHash(workerId, name);
      const qrData = JSON.stringify({
        id: workerId,
        name,
        hash: biometricHash,
        issued: (/* @__PURE__ */ new Date()).toISOString()
      });
      const qrCodeData = yield import_qrcode.default.toDataURL(qrData, {
        errorCorrectionLevel: "H",
        type: "image/png",
        width: 300,
        color: {
          dark: "#FF4500",
          // rust-orange
          light: "#0A0A0A"
          // dark background
        }
      });
      const zoneAccess = this.generateZoneAccess(zone, clearanceLevel);
      const permissions = this.generatePermissions(clearanceLevel, department);
      const shiftSchedule = this.generateDefaultShiftSchedule(zone);
      const performance = {
        efficiency: 75,
        safetyScore: 85,
        punctuality: 90,
        complianceScore: 80,
        totalHoursWorked: 0,
        shiftsCompleted: 0,
        shiftsMissed: 0,
        incidentCount: 0,
        lastEvaluation: (/* @__PURE__ */ new Date()).toISOString()
      };
      const profile = {
        // Basic Identity
        id: workerId,
        name: name.toUpperCase(),
        biometricHash,
        assignedDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
        // Organizational
        zone,
        department,
        role,
        clearanceLevel,
        // Access & Permissions
        zoneAccess,
        permissions,
        // Schedule
        shiftSchedule,
        // Equipment (initially empty)
        assignedEquipment: [],
        // Performance & History
        performance,
        incidents: [],
        movementHistory: [],
        // QR Code
        qrCodeData,
        qrCodeGenerated: (/* @__PURE__ */ new Date()).toISOString(),
        // Status
        status: "active"
      };
      this.storageService.saveWorkerProfile(profile);
      return profile;
    });
  }
  /**
   * Generate unique worker ID
   * Format: {zone}-{dept}-{number}
   * Example: 1-MFG-0042
   */
  generateWorkerID() {
    const zone = Math.floor(Math.random() * 5) + 1;
    const depts = ["MFG", "MNT", "QC", "LOG", "SEC"];
    const dept = depts[Math.floor(Math.random() * depts.length)];
    const num = Math.floor(Math.random() * 9999).toString().padStart(4, "0");
    return `${zone}-${dept}-${num}`;
  }
  /**
   * Generate biometric hash (simulated)
   */
  generateBiometricHash(id, name) {
    const data = `${id}-${name}-${Date.now()}`;
    let hash = 0;
    for (let i = 0; i < data.length; i++) {
      const char = data.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return Math.abs(hash).toString(16).toUpperCase().padStart(16, "0");
  }
  /**
   * Determine worker's primary zone based on name hash
   */
  determineWorkerZone(name) {
    const hash = name.split("").reduce((a, b) => a + b.charCodeAt(0), 0);
    return hash % 5 + 1;
  }
  /**
   * Determine clearance level
   */
  determineClearanceLevel(name) {
    const levels = ["BASIC", "STANDARD", "ELEVATED", "SUPERVISOR", "ADMIN"];
    const hash = name.length + name.charCodeAt(0);
    const index = hash % 3;
    return levels[index];
  }
  /**
   * Determine department
   */
  determineDepartment(name) {
    const departments = ["Manufacturing", "Maintenance", "Quality Control", "Logistics", "Security"];
    const hash = name.split("").reduce((a, b) => a + b.charCodeAt(0), 0);
    return departments[hash % departments.length];
  }
  /**
   * Determine role based on department
   */
  determineRole(department) {
    const roles = {
      "Manufacturing": ["Line Operator", "Assembly Technician", "Machine Operator", "Production Worker"],
      "Maintenance": ["Mechanic", "Electrician", "HVAC Technician", "Maintenance Worker"],
      "Quality Control": ["QC Inspector", "Testing Technician", "Quality Analyst"],
      "Logistics": ["Warehouse Worker", "Forklift Operator", "Shipping Clerk", "Inventory Specialist"],
      "Security": ["Security Guard", "Access Control Specialist", "Safety Officer"]
    };
    const deptRoles = roles[department] || ["General Worker"];
    return deptRoles[Math.floor(Math.random() * deptRoles.length)];
  }
  /**
   * Generate zone access permissions based on clearance
   */
  generateZoneAccess(primaryZone, clearanceLevel) {
    const allZones = [
      { id: 1, name: "Manufacturing Sector Alpha-7" },
      { id: 2, name: "Maintenance Bay Delta-3" },
      { id: 3, name: "Quality Control Station" },
      { id: 4, name: "Logistics & Warehousing" },
      { id: 5, name: "Administrative & Security" }
    ];
    const access = [];
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    allZones.forEach((zone) => {
      let accessLevel = "denied";
      let restrictions = [];
      if (zone.id === primaryZone) {
        accessLevel = "full";
      } else {
        if (clearanceLevel === "ADMIN" || clearanceLevel === "SUPERVISOR") {
          accessLevel = "full";
        } else if (clearanceLevel === "ELEVATED") {
          accessLevel = "restricted";
          restrictions = ["escort_required"];
        } else {
          accessLevel = "denied";
        }
      }
      access.push({
        zoneId: zone.id,
        zoneName: zone.name,
        accessLevel,
        grantedDate: today,
        restrictions: restrictions.length > 0 ? restrictions : void 0
      });
    });
    return access;
  }
  /**
   * Generate permissions based on clearance and department
   */
  generatePermissions(clearanceLevel, department) {
    const basePermissions = ["access_terminal", "view_schedule"];
    const clearancePermissions = {
      "BASIC": [],
      "STANDARD": ["request_equipment", "submit_reports"],
      "ELEVATED": ["request_equipment", "submit_reports", "access_archives"],
      "SUPERVISOR": ["request_equipment", "submit_reports", "access_archives", "approve_requests", "modify_schedules"],
      "ADMIN": ["request_equipment", "submit_reports", "access_archives", "approve_requests", "modify_schedules", "emergency_override", "system_access"]
    };
    const deptPermissions = {
      "Manufacturing": ["operate_machinery", "access_production_floor"],
      "Maintenance": ["access_all_zones", "emergency_repairs"],
      "Quality Control": ["inspect_products", "quarantine_items"],
      "Logistics": ["operate_vehicles", "access_warehouse"],
      "Security": ["access_all_zones", "override_locks"]
    };
    return [
      ...basePermissions,
      ...clearancePermissions[clearanceLevel] || [],
      ...deptPermissions[department] || []
    ];
  }
  /**
   * Generate default shift schedule (Mon-Fri, 6am-2pm)
   */
  generateDefaultShiftSchedule(zone) {
    const days = ["monday", "tuesday", "wednesday", "thursday", "friday"];
    return days.map((day) => ({
      day,
      startTime: "06:00",
      endTime: "14:00",
      zoneId: zone,
      status: "scheduled"
    }));
  }
  /**
   * Update worker performance metrics
   */
  updatePerformance(profile, updates) {
    profile.performance = __spreadValues(__spreadValues({}, profile.performance), updates);
    this.storageService.saveWorkerProfile(profile);
    return profile;
  }
  /**
   * Add incident to worker record
   */
  addIncident(profile, incident) {
    const newIncident = __spreadProps(__spreadValues({}, incident), {
      id: `INC-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    });
    profile.incidents.push(newIncident);
    profile.performance.incidentCount = profile.incidents.length;
    this.storageService.saveWorkerProfile(profile);
    return profile;
  }
  /**
   * Log zone movement
   */
  logMovement(profile, toZone, method) {
    const movement = {
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      fromZone: profile.zone,
      toZone,
      method
    };
    profile.movementHistory.push(movement);
    profile.zone = toZone;
    profile.lastSeen = `Zone ${toZone} - ${(/* @__PURE__ */ new Date()).toLocaleTimeString()}`;
    this.storageService.saveWorkerProfile(profile);
    return profile;
  }
  /**
   * Assign equipment to worker
   */
  assignEquipment(profile, equipment) {
    const newEquipment = __spreadProps(__spreadValues({}, equipment), {
      assignedDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
    });
    profile.assignedEquipment.push(newEquipment);
    this.storageService.saveWorkerProfile(profile);
    return profile;
  }
  /**
   * Remove equipment from worker
   */
  removeEquipment(profile, equipmentId) {
    profile.assignedEquipment = profile.assignedEquipment.filter((e) => e.id !== equipmentId);
    this.storageService.saveWorkerProfile(profile);
    return profile;
  }
  /**
   * Regenerate QR code (e.g., after security breach)
   */
  regenerateQR(profile) {
    return __async(this, null, function* () {
      const qrData = JSON.stringify({
        id: profile.id,
        name: profile.name,
        hash: profile.biometricHash,
        issued: (/* @__PURE__ */ new Date()).toISOString()
      });
      profile.qrCodeData = yield import_qrcode.default.toDataURL(qrData, {
        errorCorrectionLevel: "H",
        type: "image/png",
        width: 300,
        color: {
          dark: "#FF4500",
          light: "#0A0A0A"
        }
      });
      profile.qrCodeGenerated = (/* @__PURE__ */ new Date()).toISOString();
      this.storageService.saveWorkerProfile(profile);
      return profile;
    });
  }
  /**
   * Verify QR code data
   */
  verifyQR(scannedData) {
    try {
      const data = JSON.parse(scannedData);
      if (!data.id || !data.name || !data.hash) {
        return { valid: false, error: "Invalid QR format" };
      }
      return { valid: true, workerId: data.id };
    } catch {
      return { valid: false, error: "Invalid QR data" };
    }
  }
  /**
   * Get current worker profile from storage
   */
  getCurrentWorker() {
    return this.storageService.getWorkerProfile();
  }
  /**
   * Clear worker profile
   */
  clearWorkerProfile() {
    this.storageService.clearWorkerProfile();
  }
  static {
    this.\u0275fac = function WorkerService_Factory(t) {
      return new (t || _WorkerService)(\u0275\u0275inject(StorageService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WorkerService, factory: _WorkerService.\u0275fac, providedIn: "root" });
  }
};

// src/app/features/worker-management/worker-management.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.day;
var _forTrack2 = ($index, $item) => $item.zoneId;
function WorkerManagementComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 8);
    \u0275\u0275text(2, "ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.worker().id);
  }
}
function WorkerManagementComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 10);
    \u0275\u0275text(2, "\u26A0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 12);
    \u0275\u0275listener("click", function WorkerManagementComponent_Conditional_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goBack());
    });
    \u0275\u0275text(6, "GO BACK");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function WorkerManagementComponent_Conditional_14_Conditional_28_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "span", 27);
    \u0275\u0275text(2, "LAST SEEN:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.worker().lastSeen);
  }
}
function WorkerManagementComponent_Conditional_14_Conditional_28_Conditional_62_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "span", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "uppercase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 35)(8, "span", 36);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 37);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const equipment_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(equipment_r4.name);
    \u0275\u0275advance();
    \u0275\u0275classMap("badge " + ctx_r0.getEquipmentConditionBadgeClass(equipment_r4));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, equipment_r4.condition), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, equipment_r4.type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Assigned: ", ctx_r0.formatDate(equipment_r4.assignedDate), "");
  }
}
function WorkerManagementComponent_Conditional_14_Conditional_28_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 23)(1, "h2", 24);
    \u0275\u0275text(2, "ASSIGNED EQUIPMENT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 31);
    \u0275\u0275repeaterCreate(4, WorkerManagementComponent_Conditional_14_Conditional_28_Conditional_62_For_5_Template, 13, 10, "div", 32, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.worker().assignedEquipment);
  }
}
function WorkerManagementComponent_Conditional_14_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "section", 23)(2, "h2", 24);
    \u0275\u0275text(3, "BASIC INFORMATION");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25)(5, "div", 26)(6, "span", 27);
    \u0275\u0275text(7, "NAME:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 28);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 26)(11, "span", 27);
    \u0275\u0275text(12, "WORKER ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 28);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 26)(16, "span", 27);
    \u0275\u0275text(17, "ASSIGNED DATE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 28);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 26)(21, "span", 27);
    \u0275\u0275text(22, "STATUS:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 28)(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "uppercase");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(27, "section", 23)(28, "h2", 24);
    \u0275\u0275text(29, "ORGANIZATIONAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 25)(31, "div", 26)(32, "span", 27);
    \u0275\u0275text(33, "PRIMARY ZONE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 28);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 26)(37, "span", 27);
    \u0275\u0275text(38, "DEPARTMENT:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 28);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 26)(42, "span", 27);
    \u0275\u0275text(43, "ROLE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 28);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 26)(47, "span", 27);
    \u0275\u0275text(48, "CLEARANCE LEVEL:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 28)(50, "span");
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(52, "section", 23)(53, "h2", 24);
    \u0275\u0275text(54, "BIOMETRICS & SECURITY");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 25)(56, "div", 29)(57, "span", 27);
    \u0275\u0275text(58, "BIOMETRIC HASH:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 30);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(61, WorkerManagementComponent_Conditional_14_Conditional_28_Conditional_61_Template, 5, 1, "div", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(62, WorkerManagementComponent_Conditional_14_Conditional_28_Conditional_62_Template, 6, 0, "section", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.worker().name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.worker().id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(ctx_r0.worker().assignedDate));
    \u0275\u0275advance(5);
    \u0275\u0275classMap("badge " + ctx_r0.getStatusBadgeClass());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 15, ctx_r0.worker().status), " ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("Zone ", ctx_r0.worker().zone, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.worker().department);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.worker().role);
    \u0275\u0275advance(5);
    \u0275\u0275classMap("badge " + ctx_r0.getClearanceBadgeClass());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.worker().clearanceLevel, " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.worker().biometricHash);
    \u0275\u0275advance();
    \u0275\u0275conditional(61, ctx_r0.worker().lastSeen ? 61 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(62, ctx_r0.worker().assignedEquipment.length > 0 ? 62 : -1);
  }
}
function WorkerManagementComponent_Conditional_14_Conditional_29_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 41);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 42);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "uppercase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const shift_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 7, shift_r5.day));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", shift_r5.startTime, " - ", shift_r5.endTime, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Zone ", shift_r5.zoneId, "");
    \u0275\u0275advance();
    \u0275\u0275classMap("badge " + ctx_r0.getShiftStatusBadgeClass(shift_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 9, shift_r5.status), " ");
  }
}
function WorkerManagementComponent_Conditional_14_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "section", 23)(2, "h2", 24);
    \u0275\u0275text(3, "SHIFT SCHEDULE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 38);
    \u0275\u0275repeaterCreate(5, WorkerManagementComponent_Conditional_14_Conditional_29_For_6_Template, 11, 11, "div", 39, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.worker().shiftSchedule);
  }
}
function WorkerManagementComponent_Conditional_14_Conditional_30_For_6_Conditional_10_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const restriction_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(restriction_r6);
  }
}
function WorkerManagementComponent_Conditional_14_Conditional_30_For_6_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "span", 51);
    \u0275\u0275text(2, "Restrictions:");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, WorkerManagementComponent_Conditional_14_Conditional_30_For_6_Conditional_10_For_4_Template, 2, 1, "span", 52, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const access_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275repeater(access_r7.restrictions);
  }
}
function WorkerManagementComponent_Conditional_14_Conditional_30_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 47)(2, "span", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "uppercase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 49)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, WorkerManagementComponent_Conditional_14_Conditional_30_For_6_Conditional_10_Template, 5, 0, "div", 50);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const access_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Zone ", access_r7.zoneId, ": ", access_r7.zoneName, "");
    \u0275\u0275advance();
    \u0275\u0275classMap("badge " + ctx_r0.getZoneAccessBadgeClass(access_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, access_r7.accessLevel), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Granted: ", ctx_r0.formatDate(access_r7.grantedDate), "");
    \u0275\u0275advance();
    \u0275\u0275conditional(10, access_r7.restrictions && access_r7.restrictions.length > 0 ? 10 : -1);
  }
}
function WorkerManagementComponent_Conditional_14_Conditional_30_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "span", 53);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 54);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "titlecase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const permission_r8 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, permission_r8));
  }
}
function WorkerManagementComponent_Conditional_14_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "section", 23)(2, "h2", 24);
    \u0275\u0275text(3, "ZONE ACCESS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 43);
    \u0275\u0275repeaterCreate(5, WorkerManagementComponent_Conditional_14_Conditional_30_For_6_Template, 11, 9, "div", 44, _forTrack2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "section", 23)(8, "h2", 24);
    \u0275\u0275text(9, "SYSTEM PERMISSIONS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 45);
    \u0275\u0275repeaterCreate(11, WorkerManagementComponent_Conditional_14_Conditional_30_For_12_Template, 6, 3, "div", 46, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.worker().zoneAccess);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r0.worker().permissions);
  }
}
function WorkerManagementComponent_Conditional_14_Conditional_31_Conditional_49_For_5_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275text(1, "\u2713 Resolved");
    \u0275\u0275elementEnd();
  }
}
function WorkerManagementComponent_Conditional_14_Conditional_31_Conditional_49_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 64)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 65);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 66);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 67);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 68);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, WorkerManagementComponent_Conditional_14_Conditional_31_Conditional_49_For_5_Conditional_14_Template, 2, 0, "div", 69);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const incident_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("badge " + ctx_r0.getIncidentSeverityBadgeClass(incident_r9));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 8, incident_r9.severity), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(incident_r9.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 10, incident_r9.type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(incident_r9.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Location: ", incident_r9.location, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(14, incident_r9.resolved ? 14 : -1);
  }
}
function WorkerManagementComponent_Conditional_14_Conditional_31_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 23)(1, "h2", 24);
    \u0275\u0275text(2, "INCIDENT HISTORY");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 62);
    \u0275\u0275repeaterCreate(4, WorkerManagementComponent_Conditional_14_Conditional_31_Conditional_49_For_5_Template, 15, 12, "div", 63, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.worker().incidents);
  }
}
function WorkerManagementComponent_Conditional_14_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "section", 23)(2, "h2", 24);
    \u0275\u0275text(3, "PERFORMANCE METRICS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 55)(5, "div", 56)(6, "div", 57);
    \u0275\u0275text(7, "Efficiency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 56)(11, "div", 57);
    \u0275\u0275text(12, "Safety Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 56)(16, "div", 57);
    \u0275\u0275text(17, "Punctuality");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 56)(21, "div", 57);
    \u0275\u0275text(22, "Compliance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "section", 23)(26, "h2", 24);
    \u0275\u0275text(27, "WORK STATISTICS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 58)(29, "div", 59)(30, "span", 60);
    \u0275\u0275text(31, "Total Hours:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 61);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 59)(35, "span", 60);
    \u0275\u0275text(36, "Shifts Completed:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 61);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 59)(40, "span", 60);
    \u0275\u0275text(41, "Shifts Missed:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 61);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 59)(45, "span", 60);
    \u0275\u0275text(46, "Incidents:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 61);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(49, WorkerManagementComponent_Conditional_14_Conditional_31_Conditional_49_Template, 6, 0, "section", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275classMap("metric-value " + ctx_r0.getPerformanceScoreClass(ctx_r0.worker().performance.efficiency));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.worker().performance.efficiency, "% ");
    \u0275\u0275advance(4);
    \u0275\u0275classMap("metric-value " + ctx_r0.getPerformanceScoreClass(ctx_r0.worker().performance.safetyScore));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.worker().performance.safetyScore, "% ");
    \u0275\u0275advance(4);
    \u0275\u0275classMap("metric-value " + ctx_r0.getPerformanceScoreClass(ctx_r0.worker().performance.punctuality));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.worker().performance.punctuality, "% ");
    \u0275\u0275advance(4);
    \u0275\u0275classMap("metric-value " + ctx_r0.getPerformanceScoreClass(ctx_r0.worker().performance.complianceScore));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.worker().performance.complianceScore, "% ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", ctx_r0.worker().performance.totalHoursWorked, "h");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.worker().performance.shiftsCompleted);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.worker().performance.shiftsMissed);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.worker().performance.incidentCount);
    \u0275\u0275advance();
    \u0275\u0275conditional(49, ctx_r0.worker().incidents.length > 0 ? 49 : -1);
  }
}
function WorkerManagementComponent_Conditional_14_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "section", 70)(2, "h2", 24);
    \u0275\u0275text(3, "WORKER QR CODE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 71)(5, "div", 72);
    \u0275\u0275element(6, "img", 73);
    \u0275\u0275elementStart(7, "div", 74)(8, "span", 75);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 76)(11, "div", 77)(12, "span", 78);
    \u0275\u0275text(13, "Generated:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 79);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 80)(17, "button", 81);
    \u0275\u0275listener("click", function WorkerManagementComponent_Conditional_14_Conditional_32_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.downloadQR());
    });
    \u0275\u0275elementStart(18, "span", 82);
    \u0275\u0275text(19, "\u2B07");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "DOWNLOAD QR");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "button", 83);
    \u0275\u0275listener("click", function WorkerManagementComponent_Conditional_14_Conditional_32_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.regenerateQR());
    });
    \u0275\u0275elementStart(23, "span", 82);
    \u0275\u0275text(24, "\u{1F504}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(27, "div", 84)(28, "span", 85);
    \u0275\u0275text(29, "\u26A0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p");
    \u0275\u0275text(31, "This QR code is unique to this worker. Do not share with unauthorized personnel.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("src", ctx_r0.worker().qrCodeData, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.worker().id);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r0.formatDate(ctx_r0.worker().qrCodeGenerated), " at ", ctx_r0.formatTime(ctx_r0.worker().qrCodeGenerated), "");
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r0.isLoading());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.isLoading() ? "GENERATING..." : "REGENERATE QR");
  }
}
function WorkerManagementComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "nav", 13)(2, "button", 14);
    \u0275\u0275listener("click", function WorkerManagementComponent_Conditional_14_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.switchTab("profile"));
    });
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 16);
    \u0275\u0275text(6, "PROFILE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 14);
    \u0275\u0275listener("click", function WorkerManagementComponent_Conditional_14_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.switchTab("schedule"));
    });
    \u0275\u0275elementStart(8, "span", 15);
    \u0275\u0275text(9, "\u{1F4C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 16);
    \u0275\u0275text(11, "SCHEDULE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 14);
    \u0275\u0275listener("click", function WorkerManagementComponent_Conditional_14_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.switchTab("permissions"));
    });
    \u0275\u0275elementStart(13, "span", 15);
    \u0275\u0275text(14, "\u{1F510}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 16);
    \u0275\u0275text(16, "PERMISSIONS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 14);
    \u0275\u0275listener("click", function WorkerManagementComponent_Conditional_14_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.switchTab("performance"));
    });
    \u0275\u0275elementStart(18, "span", 15);
    \u0275\u0275text(19, "\u{1F4CA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 16);
    \u0275\u0275text(21, "PERFORMANCE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "button", 14);
    \u0275\u0275listener("click", function WorkerManagementComponent_Conditional_14_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.switchTab("qr"));
    });
    \u0275\u0275elementStart(23, "span", 15);
    \u0275\u0275text(24, "\u{1F532}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 16);
    \u0275\u0275text(26, "QR CODE");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 17);
    \u0275\u0275template(28, WorkerManagementComponent_Conditional_14_Conditional_28_Template, 63, 17, "div", 18)(29, WorkerManagementComponent_Conditional_14_Conditional_29_Template, 7, 0, "div", 19)(30, WorkerManagementComponent_Conditional_14_Conditional_30_Template, 13, 0, "div", 20)(31, WorkerManagementComponent_Conditional_14_Conditional_31_Template, 50, 17, "div", 21)(32, WorkerManagementComponent_Conditional_14_Conditional_32_Template, 32, 6, "div", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.activeTab() === "profile");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r0.activeTab() === "schedule");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r0.activeTab() === "permissions");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r0.activeTab() === "performance");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r0.activeTab() === "qr");
    \u0275\u0275advance(6);
    \u0275\u0275conditional(28, ctx_r0.activeTab() === "profile" ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(29, ctx_r0.activeTab() === "schedule" ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(30, ctx_r0.activeTab() === "permissions" ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(31, ctx_r0.activeTab() === "performance" ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(32, ctx_r0.activeTab() === "qr" ? 32 : -1);
  }
}
var WorkerManagementComponent = class _WorkerManagementComponent {
  constructor(workerService) {
    this.workerService = workerService;
    this.exitManagement = output();
    this.worker = signal(null);
    this.activeTab = signal("profile");
    this.isLoading = signal(false);
    this.error = signal("");
  }
  ngOnInit() {
    this.loadWorkerProfile();
  }
  /**
   * Load current worker profile
   */
  loadWorkerProfile() {
    const profile = this.workerService.getCurrentWorker();
    if (!profile) {
      this.error.set("No worker profile found. Please complete boot sequence.");
      return;
    }
    this.worker.set(profile);
  }
  /**
   * Switch active tab
   */
  switchTab(tab) {
    this.activeTab.set(tab);
  }
  /**
   * Navigate back to home
   */
  goBack() {
    this.exitManagement.emit();
  }
  /**
   * Regenerate QR code
   */
  regenerateQR() {
    return __async(this, null, function* () {
      const currentWorker = this.worker();
      if (!currentWorker)
        return;
      this.isLoading.set(true);
      try {
        const updated = yield this.workerService.regenerateQR(currentWorker);
        this.worker.set(updated);
        console.log("\u2705 QR Code regenerado exitosamente");
      } catch (error) {
        console.error("\u274C Error regenerando QR:", error);
        this.error.set("Error al regenerar QR code");
      } finally {
        this.isLoading.set(false);
      }
    });
  }
  /**
   * Download QR code as image
   */
  downloadQR() {
    const currentWorker = this.worker();
    if (!currentWorker || !currentWorker.qrCodeData)
      return;
    const link = document.createElement("a");
    link.download = `worker-${currentWorker.id}-qr.png`;
    link.href = currentWorker.qrCodeData;
    link.click();
  }
  /**
   * Get clearance badge color
   */
  getClearanceBadgeClass() {
    const level = this.worker()?.clearanceLevel;
    const classes = {
      "BASIC": "badge-basic",
      "STANDARD": "badge-standard",
      "ELEVATED": "badge-elevated",
      "SUPERVISOR": "badge-supervisor",
      "ADMIN": "badge-admin"
    };
    return classes[level || "BASIC"] || "badge-basic";
  }
  /**
   * Get status badge color
   */
  getStatusBadgeClass() {
    const status = this.worker()?.status;
    const classes = {
      "active": "badge-success",
      "on_shift": "badge-warning",
      "off_shift": "badge-info",
      "suspended": "badge-danger",
      "terminated": "badge-danger"
    };
    return classes[status || "active"] || "badge-info";
  }
  /**
   * Get zone access badge class
   */
  getZoneAccessBadgeClass(access) {
    const classes = {
      "full": "badge-success",
      "restricted": "badge-warning",
      "denied": "badge-danger"
    };
    return classes[access.accessLevel];
  }
  /**
   * Format date string
   */
  formatDate(dateString) {
    if (!dateString)
      return "N/A";
    try {
      return new Date(dateString).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    } catch {
      return dateString;
    }
  }
  /**
   * Format time string
   */
  formatTime(dateString) {
    if (!dateString)
      return "N/A";
    try {
      return new Date(dateString).toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch {
      return dateString;
    }
  }
  /**
   * Get shift status badge class
   */
  getShiftStatusBadgeClass(shift) {
    const classes = {
      "scheduled": "badge-info",
      "active": "badge-success",
      "completed": "badge-success",
      "missed": "badge-danger"
    };
    return classes[shift.status];
  }
  /**
   * Get equipment condition badge class
   */
  getEquipmentConditionBadgeClass(equipment) {
    const classes = {
      "excellent": "badge-success",
      "good": "badge-success",
      "fair": "badge-warning",
      "poor": "badge-warning",
      "damaged": "badge-danger"
    };
    return classes[equipment.condition];
  }
  /**
   * Get incident severity badge class
   */
  getIncidentSeverityBadgeClass(incident) {
    const classes = {
      "minor": "badge-info",
      "moderate": "badge-warning",
      "severe": "badge-danger",
      "critical": "badge-danger"
    };
    return classes[incident.severity];
  }
  /**
   * Get performance score color class
   */
  getPerformanceScoreClass(score) {
    if (score >= 80)
      return "score-excellent";
    if (score >= 60)
      return "score-good";
    if (score >= 40)
      return "score-fair";
    return "score-poor";
  }
  static {
    this.\u0275fac = function WorkerManagementComponent_Factory(t) {
      return new (t || _WorkerManagementComponent)(\u0275\u0275directiveInject(WorkerService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkerManagementComponent, selectors: [["app-worker-management"]], outputs: { exitManagement: "exitManagement" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 3, consts: [[1, "worker-management"], [1, "wm-header"], [1, "back-btn", 3, "click"], [1, "icon"], [1, "header-title"], [1, "worker-id-display"], [1, "error-state"], [1, "wm-content"], [1, "label"], [1, "value"], [1, "error-icon"], [1, "error-message"], [1, "error-action-btn", 3, "click"], [1, "tab-nav"], [1, "tab-btn", 3, "click"], [1, "tab-icon"], [1, "tab-label"], [1, "tab-content"], [1, "tab-panel", "profile-panel"], [1, "tab-panel", "schedule-panel"], [1, "tab-panel", "permissions-panel"], [1, "tab-panel", "performance-panel"], [1, "tab-panel", "qr-panel"], [1, "info-section"], [1, "section-title"], [1, "info-grid"], [1, "info-item"], [1, "info-label"], [1, "info-value"], [1, "info-item", "full-width"], [1, "info-value", "monospace"], [1, "equipment-list"], [1, "equipment-card"], [1, "equipment-header"], [1, "equipment-name"], [1, "equipment-details"], [1, "equipment-type"], [1, "equipment-date"], [1, "schedule-grid"], [1, "shift-card"], [1, "shift-day"], [1, "shift-time"], [1, "shift-zone"], [1, "zone-access-list"], [1, "zone-card"], [1, "permissions-grid"], [1, "permission-chip"], [1, "zone-header"], [1, "zone-name"], [1, "zone-details"], [1, "restrictions"], [1, "restrictions-label"], [1, "restriction-tag"], [1, "permission-icon"], [1, "permission-name"], [1, "metrics-grid"], [1, "metric-card"], [1, "metric-label"], [1, "stats-grid"], [1, "stat-item"], [1, "stat-label"], [1, "stat-value"], [1, "incidents-list"], [1, "incident-card"], [1, "incident-header"], [1, "incident-date"], [1, "incident-type"], [1, "incident-description"], [1, "incident-location"], [1, "incident-resolved"], [1, "info-section", "qr-section"], [1, "qr-container"], [1, "qr-code-wrapper"], ["alt", "Worker QR Code", 1, "qr-code-image", 3, "src"], [1, "qr-overlay"], [1, "qr-id"], [1, "qr-info"], [1, "qr-meta"], [1, "qr-label"], [1, "qr-value"], [1, "qr-actions"], [1, "qr-btn", "qr-btn-download", 3, "click"], [1, "btn-icon"], [1, "qr-btn", "qr-btn-regenerate", 3, "click", "disabled"], [1, "qr-warning"], [1, "warning-icon"]], template: function WorkerManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "button", 2);
        \u0275\u0275listener("click", function WorkerManagementComponent_Template_button_click_2_listener() {
          return ctx.goBack();
        });
        \u0275\u0275elementStart(3, "span", 3);
        \u0275\u0275text(4, "\u2190");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span");
        \u0275\u0275text(6, "BACK");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "span", 3);
        \u0275\u0275text(9, "\u{1F477}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "h1");
        \u0275\u0275text(11, "WORKER MANAGEMENT");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(12, WorkerManagementComponent_Conditional_12_Template, 5, 1, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, WorkerManagementComponent_Conditional_13_Template, 7, 1, "div", 6)(14, WorkerManagementComponent_Conditional_14_Template, 33, 15, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275conditional(12, ctx.worker() ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(13, ctx.error() ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(14, ctx.worker() && !ctx.error() ? 14 : -1);
      }
    }, dependencies: [CommonModule, UpperCasePipe, TitleCasePipe], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --rust-orange: #FF4500;\n  --dark-metal: #121212;\n  --terminal-green: #2E8B57;\n  --blood-red: #8B0000;\n  --void-black: #000000;\n  --steel-gray: #2F2F2F;\n  --copper-glow: #B87333;\n  --warning-amber: #FFA500;\n  --ice-blue: #4682B4;\n  --rust-orange-rgb:\n    255,\n    69,\n    0;\n  --terminal-green-rgb:\n    46,\n    139,\n    87;\n  --ui-surface-rgb:\n    47,\n    47,\n    47;\n  --dark-metal-rgb:\n    18,\n    18,\n    18;\n  --ui-border-rgb:\n    255,\n    69,\n    0;\n  --ui-background-rgb:\n    18,\n    18,\n    18;\n  --magma-primary: #FF4500;\n  --magma-secondary: #FF6347;\n  --magma-accent: #DC143C;\n  --magma-background: #1A0A00;\n  --magma-text: #FFDDAA;\n  --ice-primary: #4682B4;\n  --ice-secondary: #87CEEB;\n  --ice-accent: #00CED1;\n  --ice-background: #0A0A1A;\n  --ice-text: #E0F6FF;\n  --void-primary: #8B0000;\n  --void-secondary: #A020F0;\n  --void-accent: #FF1493;\n  --void-background: #000000;\n  --void-text: #DDA0DD;\n  --ui-primary: var(--rust-orange);\n  --ui-secondary: var(--terminal-green);\n  --ui-background: var(--dark-metal);\n  --ui-surface: var(--steel-gray);\n  --ui-text: #CCCCCC;\n  --ui-text-secondary: #888888;\n  --ui-border: rgba(255, 69, 0, 0.3);\n  --ui-shadow: rgba(0, 0, 0, 0.8);\n  --button-idle: var(--steel-gray);\n  --button-hover: var(--rust-orange);\n  --button-active: var(--warning-amber);\n  --button-disabled: #1A1A1A;\n  --scanline-opacity: 0.02;\n  --vignette-strength: 0.4;\n  --glitch-intensity: 0.8;\n  --rust-texture-opacity: 0.15;\n  --rust-orange-glow: rgba(255, 69, 0, 0.6);\n  --terminal-green-glow: rgba(46, 139, 87, 0.6);\n  --boot-typing-speed: 0.05s;\n  --glitch-duration: 0.3s;\n  --haptic-feedback-duration: 0.15s;\n  --theme-transition: 0.8s ease-in-out;\n  --cursor: pointer;\n}\nbody.theme-magma[_ngcontent-%COMP%] {\n  --ui-primary: var(--magma-primary);\n  --ui-secondary: var(--magma-secondary);\n  --ui-background: var(--magma-background);\n  --ui-text: var(--magma-text);\n  --ui-border: rgba(255, 69, 0, 0.5);\n}\nbody.theme-ice[_ngcontent-%COMP%] {\n  --ui-primary: var(--ice-primary);\n  --ui-secondary: var(--ice-secondary);\n  --ui-background: var(--ice-background);\n  --ui-text: var(--ice-text);\n  --ui-border: rgba(70, 130, 180, 0.5);\n}\nbody.theme-void[_ngcontent-%COMP%] {\n  --ui-primary: var(--void-primary);\n  --ui-secondary: var(--void-secondary);\n  --ui-background: var(--void-background);\n  --ui-text: var(--void-text);\n  --ui-border: rgba(139, 0, 0, 0.5);\n}\n.worker-management[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--ui-background);\n  color: var(--ui-text);\n  font-family:\n    "Courier New",\n    "Monaco",\n    monospace;\n  position: relative;\n}\n.worker-management[_ngcontent-%COMP%]::before {\n  content: "";\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    repeating-linear-gradient(\n      0deg,\n      rgba(var(--rust-orange-rgb), 0.02) 0px,\n      transparent 1px,\n      transparent 2px);\n  pointer-events: none;\n  z-index: 1;\n}\n.wm-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  padding: 20px 32px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(var(--ui-surface), 0.95),\n      rgba(var(--dark-metal), 0.9));\n  border-bottom: 2px solid var(--ui-border);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n}\n.wm-header[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 18px;\n  background: var(--ui-surface);\n  border: 2px solid var(--ui-border);\n  color: var(--ui-text);\n  font-family: inherit;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.wm-header[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.wm-header[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%]:hover {\n  background: var(--terminal-green-dim);\n  border-color: var(--terminal-green);\n  color: var(--dark-metal);\n  box-shadow: 0 0 10px var(--terminal-green-glow);\n}\n.wm-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.wm-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.wm-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  color: var(--terminal-green);\n  text-shadow: 0 0 5px var(--terminal-green-glow);\n  letter-spacing: 2px;\n}\n.wm-header[_ngcontent-%COMP%]   .worker-id-display[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background: rgba(var(--rust-orange-rgb), 0.1);\n  border: 1px solid var(--rust-orange);\n  border-radius: 4px;\n}\n.wm-header[_ngcontent-%COMP%]   .worker-id-display[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--ui-text-secondary);\n}\n.wm-header[_ngcontent-%COMP%]   .worker-id-display[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: var(--rust-orange);\n}\n.error-state[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  padding: 80px 32px;\n  text-align: center;\n}\n.error-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 24px;\n  animation: _ngcontent-%COMP%_error-pulse 2s ease-in-out infinite;\n}\n.error-state[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--rust-orange);\n  margin-bottom: 32px;\n}\n.error-state[_ngcontent-%COMP%]   .error-action-btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: var(--terminal-green);\n  border: 2px solid var(--terminal-green);\n  color: var(--dark-metal);\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.error-state[_ngcontent-%COMP%]   .error-action-btn[_ngcontent-%COMP%]:hover {\n  background: transparent;\n  color: var(--terminal-green);\n  box-shadow: 0 0 15px var(--terminal-green-glow);\n}\n@keyframes _ngcontent-%COMP%_error-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n.wm-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 32px;\n}\n.tab-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 32px;\n  border-bottom: 2px solid var(--ui-border);\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.tab-nav[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 24px;\n  background: var(--ui-surface);\n  border: 2px solid var(--ui-border);\n  border-bottom: none;\n  color: var(--ui-text-secondary);\n  font-family: inherit;\n  font-size: 14px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  white-space: nowrap;\n}\n.tab-nav[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%]   .tab-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.tab-nav[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%]   .tab-label[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n}\n.tab-nav[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(var(--terminal-green-rgb), 0.1);\n  color: var(--terminal-green);\n}\n.tab-nav[_ngcontent-%COMP%]   .tab-btn.active[_ngcontent-%COMP%] {\n  background: var(--ui-background);\n  color: var(--terminal-green);\n  border-color: var(--terminal-green);\n  box-shadow: 0 -2px 8px rgba(var(--terminal-green-rgb), 0.3);\n}\n.tab-nav[_ngcontent-%COMP%]   .tab-btn.active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: var(--ui-background);\n}\n.tab-content[_ngcontent-%COMP%] {\n  position: relative;\n}\n.tab-panel[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.info-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n  padding: 24px;\n  background: rgba(var(--ui-surface), 0.5);\n  border: 1px solid var(--ui-border);\n  border-left: 4px solid var(--rust-orange);\n}\n.info-section.qr-section[_ngcontent-%COMP%] {\n  border-left-color: var(--terminal-green);\n}\n.info-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  font-size: 18px;\n  color: var(--terminal-green);\n  letter-spacing: 1.5px;\n  text-shadow: 0 0 5px var(--terminal-green-glow);\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: 12px;\n  background: rgba(var(--dark-metal), 0.3);\n  border: 1px solid rgba(var(--ui-border), 0.5);\n}\n.info-item.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.info-item[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--ui-text-secondary);\n  letter-spacing: 1px;\n}\n.info-item[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--ui-text);\n  font-weight: bold;\n}\n.info-item[_ngcontent-%COMP%]   .info-value.monospace[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-size: 12px;\n  word-break: break-all;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  font-size: 11px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  border-radius: 2px;\n  border: 1px solid;\n}\n.badge-basic[_ngcontent-%COMP%] {\n  background: rgba(128, 128, 128, 0.2);\n  border-color: #808080;\n  color: #808080;\n}\n.badge-standard[_ngcontent-%COMP%] {\n  background: rgba(46, 139, 87, 0.2);\n  border-color: var(--terminal-green);\n  color: var(--terminal-green);\n}\n.badge-elevated[_ngcontent-%COMP%] {\n  background: rgba(255, 165, 0, 0.2);\n  border-color: #FFA500;\n  color: #FFA500;\n}\n.badge-supervisor[_ngcontent-%COMP%] {\n  background: rgba(255, 69, 0, 0.2);\n  border-color: var(--rust-orange);\n  color: var(--rust-orange);\n}\n.badge-admin[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 0, 0.2);\n  border-color: #FF0000;\n  color: #FF0000;\n}\n.badge-success[_ngcontent-%COMP%] {\n  background: rgba(46, 139, 87, 0.2);\n  border-color: var(--terminal-green);\n  color: var(--terminal-green);\n}\n.badge-warning[_ngcontent-%COMP%] {\n  background: rgba(255, 165, 0, 0.2);\n  border-color: #FFA500;\n  color: #FFA500;\n}\n.badge-info[_ngcontent-%COMP%] {\n  background: rgba(70, 130, 180, 0.2);\n  border-color: #4682B4;\n  color: #4682B4;\n}\n.badge-danger[_ngcontent-%COMP%] {\n  background: rgba(220, 20, 60, 0.2);\n  border-color: #DC143C;\n  color: #DC143C;\n}\n.equipment-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.equipment-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: rgba(var(--dark-metal), 0.3);\n  border: 1px solid var(--ui-border);\n  border-left: 3px solid var(--rust-orange);\n}\n.equipment-card[_ngcontent-%COMP%]   .equipment-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.equipment-card[_ngcontent-%COMP%]   .equipment-header[_ngcontent-%COMP%]   .equipment-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: var(--ui-text);\n}\n.equipment-card[_ngcontent-%COMP%]   .equipment-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  font-size: 12px;\n  color: var(--ui-text-secondary);\n}\n.equipment-card[_ngcontent-%COMP%]   .equipment-details[_ngcontent-%COMP%]   .equipment-type[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.schedule-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n}\n.shift-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: rgba(var(--dark-metal), 0.3);\n  border: 1px solid var(--ui-border);\n  border-top: 3px solid var(--terminal-green);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.shift-card[_ngcontent-%COMP%]   .shift-day[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: var(--terminal-green);\n  text-transform: uppercase;\n}\n.shift-card[_ngcontent-%COMP%]   .shift-time[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ui-text);\n}\n.shift-card[_ngcontent-%COMP%]   .shift-zone[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--ui-text-secondary);\n}\n.zone-access-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.zone-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: rgba(var(--dark-metal), 0.3);\n  border: 1px solid var(--ui-border);\n}\n.zone-card[_ngcontent-%COMP%]   .zone-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.zone-card[_ngcontent-%COMP%]   .zone-header[_ngcontent-%COMP%]   .zone-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: var(--ui-text);\n}\n.zone-card[_ngcontent-%COMP%]   .zone-details[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--ui-text-secondary);\n}\n.zone-card[_ngcontent-%COMP%]   .zone-details[_ngcontent-%COMP%]   .restrictions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n  margin-top: 8px;\n}\n.zone-card[_ngcontent-%COMP%]   .zone-details[_ngcontent-%COMP%]   .restrictions[_ngcontent-%COMP%]   .restrictions-label[_ngcontent-%COMP%] {\n  color: var(--rust-orange);\n  font-weight: bold;\n}\n.zone-card[_ngcontent-%COMP%]   .zone-details[_ngcontent-%COMP%]   .restrictions[_ngcontent-%COMP%]   .restriction-tag[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  background: rgba(var(--rust-orange-rgb), 0.2);\n  border: 1px solid var(--rust-orange);\n  border-radius: 2px;\n  font-size: 10px;\n  text-transform: uppercase;\n}\n.permissions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 12px;\n}\n.permission-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  background: rgba(var(--terminal-green-rgb), 0.1);\n  border: 1px solid var(--terminal-green);\n  border-radius: 4px;\n}\n.permission-chip[_ngcontent-%COMP%]   .permission-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--terminal-green);\n}\n.permission-chip[_ngcontent-%COMP%]   .permission-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--ui-text);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.metric-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: rgba(var(--dark-metal), 0.3);\n  border: 1px solid var(--ui-border);\n  text-align: center;\n}\n.metric-card[_ngcontent-%COMP%]   .metric-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--ui-text-secondary);\n  margin-bottom: 12px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.metric-card[_ngcontent-%COMP%]   .metric-value[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: bold;\n}\n.metric-card[_ngcontent-%COMP%]   .metric-value.score-excellent[_ngcontent-%COMP%] {\n  color: var(--terminal-green);\n  text-shadow: 0 0 8px var(--terminal-green-glow);\n}\n.metric-card[_ngcontent-%COMP%]   .metric-value.score-good[_ngcontent-%COMP%] {\n  color: #FFB700;\n}\n.metric-card[_ngcontent-%COMP%]   .metric-value.score-fair[_ngcontent-%COMP%] {\n  color: #FFA500;\n}\n.metric-card[_ngcontent-%COMP%]   .metric-value.score-poor[_ngcontent-%COMP%] {\n  color: #DC143C;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}\n.stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  background: rgba(var(--dark-metal), 0.3);\n  border: 1px solid var(--ui-border);\n}\n.stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--ui-text-secondary);\n}\n.stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  color: var(--terminal-green);\n}\n.incidents-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.incident-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: rgba(var(--dark-metal), 0.3);\n  border: 1px solid var(--ui-border);\n  border-left: 3px solid #DC143C;\n}\n.incident-card[_ngcontent-%COMP%]   .incident-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.incident-card[_ngcontent-%COMP%]   .incident-type[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  color: var(--ui-text);\n  margin-bottom: 8px;\n  text-transform: uppercase;\n}\n.incident-card[_ngcontent-%COMP%]   .incident-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ui-text);\n  margin-bottom: 8px;\n  line-height: 1.5;\n}\n.incident-card[_ngcontent-%COMP%]   .incident-location[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--ui-text-secondary);\n  margin-bottom: 8px;\n}\n.incident-card[_ngcontent-%COMP%]   .incident-resolved[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--terminal-green);\n  font-weight: bold;\n}\n.qr-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 32px;\n}\n@media (min-width: 768px) {\n  .qr-container[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: center;\n  }\n}\n.qr-code-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 20px;\n  background: var(--ui-background);\n  border: 3px solid var(--terminal-green);\n  box-shadow: 0 0 20px rgba(var(--terminal-green-rgb), 0.3);\n}\n.qr-code-wrapper[_ngcontent-%COMP%]   .qr-code-image[_ngcontent-%COMP%] {\n  display: block;\n  width: 300px;\n  height: 300px;\n}\n.qr-code-wrapper[_ngcontent-%COMP%]   .qr-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 6px 16px;\n  background: var(--terminal-green);\n  color: var(--dark-metal);\n  font-weight: bold;\n  font-size: 14px;\n  letter-spacing: 1px;\n}\n.qr-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.qr-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.qr-meta[_ngcontent-%COMP%]   .qr-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--ui-text-secondary);\n  text-transform: uppercase;\n}\n.qr-meta[_ngcontent-%COMP%]   .qr-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ui-text);\n}\n.qr-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.qr-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 20px;\n  font-family: inherit;\n  font-size: 14px;\n  font-weight: bold;\n  border: 2px solid;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.qr-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.qr-btn.qr-btn-download[_ngcontent-%COMP%] {\n  background: var(--terminal-green);\n  border-color: var(--terminal-green);\n  color: var(--dark-metal);\n}\n.qr-btn.qr-btn-download[_ngcontent-%COMP%]:hover {\n  background: transparent;\n  color: var(--terminal-green);\n  box-shadow: 0 0 15px var(--terminal-green-glow);\n}\n.qr-btn.qr-btn-regenerate[_ngcontent-%COMP%] {\n  background: var(--ui-surface);\n  border-color: var(--rust-orange);\n  color: var(--rust-orange);\n}\n.qr-btn.qr-btn-regenerate[_ngcontent-%COMP%]:hover {\n  background: var(--rust-orange);\n  color: var(--dark-metal);\n  box-shadow: 0 0 15px rgba(var(--rust-orange-rgb), 0.5);\n}\n.qr-btn.qr-btn-regenerate[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.qr-warning[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: start;\n  gap: 12px;\n  padding: 16px;\n  background: rgba(var(--rust-orange-rgb), 0.1);\n  border: 1px solid var(--rust-orange);\n  border-radius: 4px;\n  margin-top: 24px;\n}\n.qr-warning[_ngcontent-%COMP%]   .warning-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--rust-orange);\n}\n.qr-warning[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: var(--ui-text);\n  line-height: 1.5;\n}\n@media (max-width: 768px) {\n  .wm-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .wm-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n  .wm-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .tab-nav[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%]   .tab-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .schedule-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkerManagementComponent, { className: "WorkerManagementComponent", filePath: "src\\app\\features\\worker-management\\worker-management.component.ts", lineNumber: 17 });
})();

export {
  WorkerService,
  WorkerManagementComponent
};

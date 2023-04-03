"use strict";
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // ../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_version.js
  var init_version = __esm({
    "../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_version.js"() {
      "use strict";
      try {
        self["workbox:core:6.5.3"] && _();
      } catch (e) {
      }
    }
  });

  // ../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_private/logger.js
  var logger;
  var init_logger = __esm({
    "../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_private/logger.js"() {
      init_version();
      logger = false ? null : (() => {
        if (!("__WB_DISABLE_DEV_LOGS" in self)) {
          self.__WB_DISABLE_DEV_LOGS = false;
        }
        let inGroup = false;
        const methodToColorMap = {
          debug: `#7f8c8d`,
          log: `#2ecc71`,
          warn: `#f39c12`,
          error: `#c0392b`,
          groupCollapsed: `#3498db`,
          groupEnd: null
          // No colored prefix on groupEnd
        };
        const print = function(method, args) {
          if (self.__WB_DISABLE_DEV_LOGS) {
            return;
          }
          if (method === "groupCollapsed") {
            if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
              console[method](...args);
              return;
            }
          }
          const styles = [
            `background: ${methodToColorMap[method]}`,
            `border-radius: 0.5em`,
            `color: white`,
            `font-weight: bold`,
            `padding: 2px 0.5em`
          ];
          const logPrefix = inGroup ? [] : ["%cworkbox", styles.join(";")];
          console[method](...logPrefix, ...args);
          if (method === "groupCollapsed") {
            inGroup = true;
          }
          if (method === "groupEnd") {
            inGroup = false;
          }
        };
        const api = {};
        const loggerMethods = Object.keys(methodToColorMap);
        for (const key of loggerMethods) {
          const method = key;
          api[method] = (...args) => {
            print(method, args);
          };
        }
        return api;
      })();
    }
  });

  // ../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/models/messages/messages.js
  var messages;
  var init_messages = __esm({
    "../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/models/messages/messages.js"() {
      init_version();
      messages = {
        "invalid-value": ({ paramName, validValueDescription, value }) => {
          if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
          }
          return `The '${paramName}' parameter was given a value with an unexpected value. ${validValueDescription} Received a value of ${JSON.stringify(value)}.`;
        },
        "not-an-array": ({ moduleName, className, funcName, paramName }) => {
          if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
          }
          return `The parameter '${paramName}' passed into '${moduleName}.${className}.${funcName}()' must be an array.`;
        },
        "incorrect-type": ({ expectedType, paramName, moduleName, className, funcName }) => {
          if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
          }
          const classNameStr = className ? `${className}.` : "";
          return `The parameter '${paramName}' passed into '${moduleName}.${classNameStr}${funcName}()' must be of type ${expectedType}.`;
        },
        "incorrect-class": ({ expectedClassName, paramName, moduleName, className, funcName, isReturnValueProblem }) => {
          if (!expectedClassName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
          }
          const classNameStr = className ? `${className}.` : "";
          if (isReturnValueProblem) {
            return `The return value from '${moduleName}.${classNameStr}${funcName}()' must be an instance of class ${expectedClassName}.`;
          }
          return `The parameter '${paramName}' passed into '${moduleName}.${classNameStr}${funcName}()' must be an instance of class ${expectedClassName}.`;
        },
        "missing-a-method": ({ expectedMethod, paramName, moduleName, className, funcName }) => {
          if (!expectedMethod || !paramName || !moduleName || !className || !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
          }
          return `${moduleName}.${className}.${funcName}() expected the '${paramName}' parameter to expose a '${expectedMethod}' method.`;
        },
        "add-to-cache-list-unexpected-type": ({ entry }) => {
          return `An unexpected entry was passed to 'workbox-precaching.PrecacheController.addToCacheList()' The entry '${JSON.stringify(entry)}' isn't supported. You must supply an array of strings with one or more characters, objects with a url property or Request objects.`;
        },
        "add-to-cache-list-conflicting-entries": ({ firstEntry, secondEntry }) => {
          if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to 'add-to-cache-list-duplicate-entries' error.`);
          }
          return `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${firstEntry} but different revision details. Workbox is unable to cache and version the asset correctly. Please remove one of the entries.`;
        },
        "plugin-error-request-will-fetch": ({ thrownErrorMessage }) => {
          if (!thrownErrorMessage) {
            throw new Error(`Unexpected input to 'plugin-error-request-will-fetch', error.`);
          }
          return `An error was thrown by a plugins 'requestWillFetch()' method. The thrown error message was: '${thrownErrorMessage}'.`;
        },
        "invalid-cache-name": ({ cacheNameId, value }) => {
          if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
          }
          return `You must provide a name containing at least one character for setCacheDetails({${cacheNameId}: '...'}). Received a value of '${JSON.stringify(value)}'`;
        },
        "unregister-route-but-not-found-with-method": ({ method }) => {
          if (!method) {
            throw new Error(`Unexpected input to 'unregister-route-but-not-found-with-method' error.`);
          }
          return `The route you're trying to unregister was not  previously registered for the method type '${method}'.`;
        },
        "unregister-route-route-not-registered": () => {
          return `The route you're trying to unregister was not previously registered.`;
        },
        "queue-replay-failed": ({ name }) => {
          return `Replaying the background sync queue '${name}' failed.`;
        },
        "duplicate-queue-name": ({ name }) => {
          return `The Queue name '${name}' is already being used. All instances of backgroundSync.Queue must be given unique names.`;
        },
        "expired-test-without-max-age": ({ methodName, paramName }) => {
          return `The '${methodName}()' method can only be used when the '${paramName}' is used in the constructor.`;
        },
        "unsupported-route-type": ({ moduleName, className, funcName, paramName }) => {
          return `The supplied '${paramName}' parameter was an unsupported type. Please check the docs for ${moduleName}.${className}.${funcName} for valid input types.`;
        },
        "not-array-of-class": ({ value, expectedClass, moduleName, className, funcName, paramName }) => {
          return `The supplied '${paramName}' parameter must be an array of '${expectedClass}' objects. Received '${JSON.stringify(value)},'. Please check the call to ${moduleName}.${className}.${funcName}() to fix the issue.`;
        },
        "max-entries-or-age-required": ({ moduleName, className, funcName }) => {
          return `You must define either config.maxEntries or config.maxAgeSecondsin ${moduleName}.${className}.${funcName}`;
        },
        "statuses-or-headers-required": ({ moduleName, className, funcName }) => {
          return `You must define either config.statuses or config.headersin ${moduleName}.${className}.${funcName}`;
        },
        "invalid-string": ({ moduleName, funcName, paramName }) => {
          if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
          }
          return `When using strings, the '${paramName}' parameter must start with 'http' (for cross-origin matches) or '/' (for same-origin matches). Please see the docs for ${moduleName}.${funcName}() for more info.`;
        },
        "channel-name-required": () => {
          return `You must provide a channelName to construct a BroadcastCacheUpdate instance.`;
        },
        "invalid-responses-are-same-args": () => {
          return `The arguments passed into responsesAreSame() appear to be invalid. Please ensure valid Responses are used.`;
        },
        "expire-custom-caches-only": () => {
          return `You must provide a 'cacheName' property when using the expiration plugin with a runtime caching strategy.`;
        },
        "unit-must-be-bytes": ({ normalizedRangeHeader }) => {
          if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
          }
          return `The 'unit' portion of the Range header must be set to 'bytes'. The Range header provided was "${normalizedRangeHeader}"`;
        },
        "single-range-only": ({ normalizedRangeHeader }) => {
          if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
          }
          return `Multiple ranges are not supported. Please use a  single start value, and optional end value. The Range header provided was "${normalizedRangeHeader}"`;
        },
        "invalid-range-values": ({ normalizedRangeHeader }) => {
          if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
          }
          return `The Range header is missing both start and end values. At least one of those values is needed. The Range header provided was "${normalizedRangeHeader}"`;
        },
        "no-range-header": () => {
          return `No Range header was found in the Request provided.`;
        },
        "range-not-satisfiable": ({ size, start, end }) => {
          return `The start (${start}) and end (${end}) values in the Range are not satisfiable by the cached response, which is ${size} bytes.`;
        },
        "attempt-to-cache-non-get-request": ({ url, method }) => {
          return `Unable to cache '${url}' because it is a '${method}' request and only 'GET' requests can be cached.`;
        },
        "cache-put-with-no-response": ({ url }) => {
          return `There was an attempt to cache '${url}' but the response was not defined.`;
        },
        "no-response": ({ url, error }) => {
          let message = `The strategy could not generate a response for '${url}'.`;
          if (error) {
            message += ` The underlying error is ${error}.`;
          }
          return message;
        },
        "bad-precaching-response": ({ url, status }) => {
          return `The precaching request for '${url}' failed` + (status ? ` with an HTTP status of ${status}.` : `.`);
        },
        "non-precached-url": ({ url }) => {
          return `createHandlerBoundToURL('${url}') was called, but that URL is not precached. Please pass in a URL that is precached instead.`;
        },
        "add-to-cache-list-conflicting-integrities": ({ url }) => {
          return `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${url} with different integrity values. Please remove one of them.`;
        },
        "missing-precache-entry": ({ cacheName, url }) => {
          return `Unable to find a precached response in ${cacheName} for ${url}.`;
        },
        "cross-origin-copy-response": ({ origin }) => {
          return `workbox-core.copyResponse() can only be used with same-origin responses. It was passed a response with origin ${origin}.`;
        },
        "opaque-streams-source": ({ type }) => {
          const message = `One of the workbox-streams sources resulted in an '${type}' response.`;
          if (type === "opaqueredirect") {
            return `${message} Please do not use a navigation request that results in a redirect as a source.`;
          }
          return `${message} Please ensure your sources are CORS-enabled.`;
        }
      };
    }
  });

  // ../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/models/messages/messageGenerator.js
  var generatorFunction, messageGenerator;
  var init_messageGenerator = __esm({
    "../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/models/messages/messageGenerator.js"() {
      init_messages();
      init_version();
      generatorFunction = (code, details = {}) => {
        const message = messages[code];
        if (!message) {
          throw new Error(`Unable to find message for code '${code}'.`);
        }
        return message(details);
      };
      messageGenerator = false ? fallback : generatorFunction;
    }
  });

  // ../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_private/WorkboxError.js
  var WorkboxError;
  var init_WorkboxError = __esm({
    "../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_private/WorkboxError.js"() {
      init_messageGenerator();
      init_version();
      WorkboxError = class extends Error {
        /**
         *
         * @param {string} errorCode The error code that
         * identifies this particular error.
         * @param {Object=} details Any relevant arguments
         * that will help developers identify issues should
         * be added as a key on the context object.
         */
        constructor(errorCode, details) {
          const message = messageGenerator(errorCode, details);
          super(message);
          this.name = errorCode;
          this.details = details;
        }
      };
    }
  });

  // ../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_private/assert.js
  var isArray, hasMethod, isType, isInstance, isOneOf, isArrayOfClass, finalAssertExports;
  var init_assert = __esm({
    "../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_private/assert.js"() {
      init_WorkboxError();
      init_version();
      isArray = (value, details) => {
        if (!Array.isArray(value)) {
          throw new WorkboxError("not-an-array", details);
        }
      };
      hasMethod = (object, expectedMethod, details) => {
        const type = typeof object[expectedMethod];
        if (type !== "function") {
          details["expectedMethod"] = expectedMethod;
          throw new WorkboxError("missing-a-method", details);
        }
      };
      isType = (object, expectedType, details) => {
        if (typeof object !== expectedType) {
          details["expectedType"] = expectedType;
          throw new WorkboxError("incorrect-type", details);
        }
      };
      isInstance = (object, expectedClass, details) => {
        if (!(object instanceof expectedClass)) {
          details["expectedClassName"] = expectedClass.name;
          throw new WorkboxError("incorrect-class", details);
        }
      };
      isOneOf = (value, validValues, details) => {
        if (!validValues.includes(value)) {
          details["validValueDescription"] = `Valid values are ${JSON.stringify(validValues)}.`;
          throw new WorkboxError("invalid-value", details);
        }
      };
      isArrayOfClass = (value, expectedClass, details) => {
        const error = new WorkboxError("not-array-of-class", details);
        if (!Array.isArray(value)) {
          throw error;
        }
        for (const item of value) {
          if (!(item instanceof expectedClass)) {
            throw error;
          }
        }
      };
      finalAssertExports = false ? null : {
        hasMethod,
        isArray,
        isInstance,
        isOneOf,
        isType,
        isArrayOfClass
      };
    }
  });

  // ../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/models/quotaErrorCallbacks.js
  var quotaErrorCallbacks;
  var init_quotaErrorCallbacks = __esm({
    "../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/models/quotaErrorCallbacks.js"() {
      init_version();
      quotaErrorCallbacks = /* @__PURE__ */ new Set();
    }
  });

  // ../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/registerQuotaErrorCallback.js
  function registerQuotaErrorCallback(callback) {
    if (true) {
      finalAssertExports.isType(callback, "function", {
        moduleName: "workbox-core",
        funcName: "register",
        paramName: "callback"
      });
    }
    quotaErrorCallbacks.add(callback);
    if (true) {
      logger.log("Registered a callback to respond to quota errors.", callback);
    }
  }
  var init_registerQuotaErrorCallback = __esm({
    "../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/registerQuotaErrorCallback.js"() {
      init_logger();
      init_assert();
      init_quotaErrorCallbacks();
      init_version();
    }
  });

  // ../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_private/cacheNames.js
  var _cacheNameDetails, _createCacheName, eachCacheNameDetail, cacheNames;
  var init_cacheNames = __esm({
    "../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_private/cacheNames.js"() {
      init_version();
      _cacheNameDetails = {
        googleAnalytics: "googleAnalytics",
        precache: "precache-v2",
        prefix: "workbox",
        runtime: "runtime",
        suffix: typeof registration !== "undefined" ? registration.scope : ""
      };
      _createCacheName = (cacheName) => {
        return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix].filter((value) => value && value.length > 0).join("-");
      };
      eachCacheNameDetail = (fn) => {
        for (const key of Object.keys(_cacheNameDetails)) {
          fn(key);
        }
      };
      cacheNames = {
        updateDetails: (details) => {
          eachCacheNameDetail((key) => {
            if (typeof details[key] === "string") {
              _cacheNameDetails[key] = details[key];
            }
          });
        },
        getGoogleAnalyticsName: (userCacheName) => {
          return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
        },
        getPrecacheName: (userCacheName) => {
          return userCacheName || _createCacheName(_cacheNameDetails.precache);
        },
        getPrefix: () => {
          return _cacheNameDetails.prefix;
        },
        getRuntimeName: (userCacheName) => {
          return userCacheName || _createCacheName(_cacheNameDetails.runtime);
        },
        getSuffix: () => {
          return _cacheNameDetails.suffix;
        }
      };
    }
  });

  // ../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js
  function stripParams(fullURL, ignoreParams) {
    const strippedURL = new URL(fullURL);
    for (const param of ignoreParams) {
      strippedURL.searchParams.delete(param);
    }
    return strippedURL.href;
  }
  async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
    const strippedRequestURL = stripParams(request.url, ignoreParams);
    if (request.url === strippedRequestURL) {
      return cache.match(request, matchOptions);
    }
    const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
    const cacheKeys = await cache.keys(request, keysOptions);
    for (const cacheKey of cacheKeys) {
      const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
      if (strippedRequestURL === strippedCacheKeyURL) {
        return cache.match(cacheKey, matchOptions);
      }
    }
    return;
  }
  var init_cacheMatchIgnoreParams = __esm({
    "../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js"() {
      init_version();
    }
  });

  // ../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_private/canConstructReadableStream.js
  var init_canConstructReadableStream = __esm({
    "../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_private/canConstructReadableStream.js"() {
      init_version();
    }
  });

  // ../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js
  var init_canConstructResponseFromBodyStream = __esm({
    "../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js"() {
      init_version();
    }
  });

  // ../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_private/dontWaitFor.js
  function dontWaitFor(promise) {
    void promise.then(() => {
    });
  }
  var init_dontWaitFor = __esm({
    "../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_private/dontWaitFor.js"() {
      init_version();
    }
  });

  // ../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_private/Deferred.js
  var Deferred;
  var init_Deferred = __esm({
    "../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_private/Deferred.js"() {
      init_version();
      Deferred = class {
        /**
         * Creates a promise and exposes its resolve and reject functions as methods.
         */
        constructor() {
          this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
          });
        }
      };
    }
  });

  // ../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js
  async function executeQuotaErrorCallbacks() {
    if (true) {
      logger.log(`About to run ${quotaErrorCallbacks.size} callbacks to clean up caches.`);
    }
    for (const callback of quotaErrorCallbacks) {
      await callback();
      if (true) {
        logger.log(callback, "is complete.");
      }
    }
    if (true) {
      logger.log("Finished running callbacks.");
    }
  }
  var init_executeQuotaErrorCallbacks = __esm({
    "../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js"() {
      init_logger();
      init_quotaErrorCallbacks();
      init_version();
    }
  });

  // ../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_private/getFriendlyURL.js
  var getFriendlyURL;
  var init_getFriendlyURL = __esm({
    "../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_private/getFriendlyURL.js"() {
      init_version();
      getFriendlyURL = (url) => {
        const urlObj = new URL(String(url), location.href);
        return urlObj.href.replace(new RegExp(`^${location.origin}`), "");
      };
    }
  });

  // ../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_private/timeout.js
  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  var init_timeout = __esm({
    "../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_private/timeout.js"() {
      init_version();
    }
  });

  // ../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_private/resultingClientExists.js
  var init_resultingClientExists = __esm({
    "../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_private/resultingClientExists.js"() {
      init_timeout();
      init_version();
    }
  });

  // ../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_private/waitUntil.js
  var init_waitUntil = __esm({
    "../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_private/waitUntil.js"() {
      init_version();
    }
  });

  // ../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_private.js
  var init_private = __esm({
    "../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/_private.js"() {
      init_assert();
      init_cacheNames();
      init_cacheMatchIgnoreParams();
      init_canConstructReadableStream();
      init_canConstructResponseFromBodyStream();
      init_dontWaitFor();
      init_Deferred();
      init_executeQuotaErrorCallbacks();
      init_getFriendlyURL();
      init_logger();
      init_resultingClientExists();
      init_timeout();
      init_waitUntil();
      init_WorkboxError();
      init_version();
    }
  });

  // ../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/cacheNames.js
  var init_cacheNames2 = __esm({
    "../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/cacheNames.js"() {
      init_cacheNames();
      init_version();
    }
  });

  // ../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/copyResponse.js
  var init_copyResponse = __esm({
    "../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/copyResponse.js"() {
      init_canConstructResponseFromBodyStream();
      init_WorkboxError();
      init_version();
    }
  });

  // ../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/clientsClaim.js
  function clientsClaim() {
    self.addEventListener("activate", () => self.clients.claim());
  }
  var init_clientsClaim = __esm({
    "../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/clientsClaim.js"() {
      init_version();
    }
  });

  // ../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/setCacheNameDetails.js
  var init_setCacheNameDetails = __esm({
    "../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/setCacheNameDetails.js"() {
      init_assert();
      init_cacheNames();
      init_WorkboxError();
      init_version();
    }
  });

  // ../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/skipWaiting.js
  var init_skipWaiting = __esm({
    "../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/skipWaiting.js"() {
      init_logger();
      init_version();
    }
  });

  // ../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/types.js
  var init_types = __esm({
    "../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/types.js"() {
      init_version();
    }
  });

  // ../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/index.js
  var init_workbox_core = __esm({
    "../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/index.js"() {
      init_registerQuotaErrorCallback();
      init_private();
      init_cacheNames2();
      init_copyResponse();
      init_clientsClaim();
      init_setCacheNameDetails();
      init_skipWaiting();
      init_version();
      init_types();
    }
  });

  // ../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/index.mjs
  var init_workbox_core2 = __esm({
    "../../node_modules/.pnpm/workbox-core@6.5.4/node_modules/workbox-core/index.mjs"() {
      init_workbox_core();
    }
  });

  // ../../node_modules/.pnpm/idb@7.1.1/node_modules/idb/build/wrap-idb-value.js
  function getIdbProxyableTypes() {
    return idbProxyableTypes || (idbProxyableTypes = [
      IDBDatabase,
      IDBObjectStore,
      IDBIndex,
      IDBCursor,
      IDBTransaction
    ]);
  }
  function getCursorAdvanceMethods() {
    return cursorAdvanceMethods || (cursorAdvanceMethods = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey
    ]);
  }
  function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
      const unlisten = () => {
        request.removeEventListener("success", success);
        request.removeEventListener("error", error);
      };
      const success = () => {
        resolve(wrap(request.result));
        unlisten();
      };
      const error = () => {
        reject(request.error);
        unlisten();
      };
      request.addEventListener("success", success);
      request.addEventListener("error", error);
    });
    promise.then((value) => {
      if (value instanceof IDBCursor) {
        cursorRequestMap.set(value, request);
      }
    }).catch(() => {
    });
    reverseTransformCache.set(promise, request);
    return promise;
  }
  function cacheDonePromiseForTransaction(tx) {
    if (transactionDoneMap.has(tx))
      return;
    const done = new Promise((resolve, reject) => {
      const unlisten = () => {
        tx.removeEventListener("complete", complete);
        tx.removeEventListener("error", error);
        tx.removeEventListener("abort", error);
      };
      const complete = () => {
        resolve();
        unlisten();
      };
      const error = () => {
        reject(tx.error || new DOMException("AbortError", "AbortError"));
        unlisten();
      };
      tx.addEventListener("complete", complete);
      tx.addEventListener("error", error);
      tx.addEventListener("abort", error);
    });
    transactionDoneMap.set(tx, done);
  }
  function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
  }
  function wrapFunction(func) {
    if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) {
      return function(storeNames, ...args) {
        const tx = func.call(unwrap(this), storeNames, ...args);
        transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
        return wrap(tx);
      };
    }
    if (getCursorAdvanceMethods().includes(func)) {
      return function(...args) {
        func.apply(unwrap(this), args);
        return wrap(cursorRequestMap.get(this));
      };
    }
    return function(...args) {
      return wrap(func.apply(unwrap(this), args));
    };
  }
  function transformCachableValue(value) {
    if (typeof value === "function")
      return wrapFunction(value);
    if (value instanceof IDBTransaction)
      cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
      return new Proxy(value, idbProxyTraps);
    return value;
  }
  function wrap(value) {
    if (value instanceof IDBRequest)
      return promisifyRequest(value);
    if (transformCache.has(value))
      return transformCache.get(value);
    const newValue = transformCachableValue(value);
    if (newValue !== value) {
      transformCache.set(value, newValue);
      reverseTransformCache.set(newValue, value);
    }
    return newValue;
  }
  var instanceOfAny, idbProxyableTypes, cursorAdvanceMethods, cursorRequestMap, transactionDoneMap, transactionStoreNamesMap, transformCache, reverseTransformCache, idbProxyTraps, unwrap;
  var init_wrap_idb_value = __esm({
    "../../node_modules/.pnpm/idb@7.1.1/node_modules/idb/build/wrap-idb-value.js"() {
      instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
      cursorRequestMap = /* @__PURE__ */ new WeakMap();
      transactionDoneMap = /* @__PURE__ */ new WeakMap();
      transactionStoreNamesMap = /* @__PURE__ */ new WeakMap();
      transformCache = /* @__PURE__ */ new WeakMap();
      reverseTransformCache = /* @__PURE__ */ new WeakMap();
      idbProxyTraps = {
        get(target, prop, receiver) {
          if (target instanceof IDBTransaction) {
            if (prop === "done")
              return transactionDoneMap.get(target);
            if (prop === "objectStoreNames") {
              return target.objectStoreNames || transactionStoreNamesMap.get(target);
            }
            if (prop === "store") {
              return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
            }
          }
          return wrap(target[prop]);
        },
        set(target, prop, value) {
          target[prop] = value;
          return true;
        },
        has(target, prop) {
          if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
            return true;
          }
          return prop in target;
        }
      };
      unwrap = (value) => reverseTransformCache.get(value);
    }
  });

  // ../../node_modules/.pnpm/idb@7.1.1/node_modules/idb/build/index.js
  function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = wrap(request);
    if (upgrade) {
      request.addEventListener("upgradeneeded", (event) => {
        upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
      });
    }
    if (blocked) {
      request.addEventListener("blocked", (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion,
        event.newVersion,
        event
      ));
    }
    openPromise.then((db) => {
      if (terminated)
        db.addEventListener("close", () => terminated());
      if (blocking) {
        db.addEventListener("versionchange", (event) => blocking(event.oldVersion, event.newVersion, event));
      }
    }).catch(() => {
    });
    return openPromise;
  }
  function deleteDB(name, { blocked } = {}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked) {
      request.addEventListener("blocked", (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion,
        event
      ));
    }
    return wrap(request).then(() => void 0);
  }
  function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
      return;
    }
    if (cachedMethods.get(prop))
      return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, "");
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
      // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
      !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))
    ) {
      return;
    }
    const method = async function(storeName, ...args) {
      const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
      let target2 = tx.store;
      if (useIndex)
        target2 = target2.index(args.shift());
      return (await Promise.all([
        target2[targetFuncName](...args),
        isWrite && tx.done
      ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
  }
  var readMethods, writeMethods, cachedMethods;
  var init_build = __esm({
    "../../node_modules/.pnpm/idb@7.1.1/node_modules/idb/build/index.js"() {
      init_wrap_idb_value();
      init_wrap_idb_value();
      readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
      writeMethods = ["put", "add", "delete", "clear"];
      cachedMethods = /* @__PURE__ */ new Map();
      replaceTraps((oldTraps) => ({
        ...oldTraps,
        get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
        has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
      }));
    }
  });

  // ../../node_modules/.pnpm/workbox-expiration@6.5.4/node_modules/workbox-expiration/_version.js
  var init_version2 = __esm({
    "../../node_modules/.pnpm/workbox-expiration@6.5.4/node_modules/workbox-expiration/_version.js"() {
      "use strict";
      try {
        self["workbox:expiration:6.5.3"] && _();
      } catch (e) {
      }
    }
  });

  // ../../node_modules/.pnpm/workbox-expiration@6.5.4/node_modules/workbox-expiration/models/CacheTimestampsModel.js
  var DB_NAME, CACHE_OBJECT_STORE, normalizeURL, CacheTimestampsModel;
  var init_CacheTimestampsModel = __esm({
    "../../node_modules/.pnpm/workbox-expiration@6.5.4/node_modules/workbox-expiration/models/CacheTimestampsModel.js"() {
      init_build();
      init_version2();
      DB_NAME = "workbox-expiration";
      CACHE_OBJECT_STORE = "cache-entries";
      normalizeURL = (unNormalizedUrl) => {
        const url = new URL(unNormalizedUrl, location.href);
        url.hash = "";
        return url.href;
      };
      CacheTimestampsModel = class {
        /**
         *
         * @param {string} cacheName
         *
         * @private
         */
        constructor(cacheName) {
          this._db = null;
          this._cacheName = cacheName;
        }
        /**
         * Performs an upgrade of indexedDB.
         *
         * @param {IDBPDatabase<CacheDbSchema>} db
         *
         * @private
         */
        _upgradeDb(db) {
          const objStore = db.createObjectStore(CACHE_OBJECT_STORE, { keyPath: "id" });
          objStore.createIndex("cacheName", "cacheName", { unique: false });
          objStore.createIndex("timestamp", "timestamp", { unique: false });
        }
        /**
         * Performs an upgrade of indexedDB and deletes deprecated DBs.
         *
         * @param {IDBPDatabase<CacheDbSchema>} db
         *
         * @private
         */
        _upgradeDbAndDeleteOldDbs(db) {
          this._upgradeDb(db);
          if (this._cacheName) {
            void deleteDB(this._cacheName);
          }
        }
        /**
         * @param {string} url
         * @param {number} timestamp
         *
         * @private
         */
        async setTimestamp(url, timestamp) {
          url = normalizeURL(url);
          const entry = {
            url,
            timestamp,
            cacheName: this._cacheName,
            // Creating an ID from the URL and cache name won't be necessary once
            // Edge switches to Chromium and all browsers we support work with
            // array keyPaths.
            id: this._getId(url)
          };
          const db = await this.getDb();
          const tx = db.transaction(CACHE_OBJECT_STORE, "readwrite", {
            durability: "relaxed"
          });
          await tx.store.put(entry);
          await tx.done;
        }
        /**
         * Returns the timestamp stored for a given URL.
         *
         * @param {string} url
         * @return {number | undefined}
         *
         * @private
         */
        async getTimestamp(url) {
          const db = await this.getDb();
          const entry = await db.get(CACHE_OBJECT_STORE, this._getId(url));
          return entry === null || entry === void 0 ? void 0 : entry.timestamp;
        }
        /**
         * Iterates through all the entries in the object store (from newest to
         * oldest) and removes entries once either `maxCount` is reached or the
         * entry's timestamp is less than `minTimestamp`.
         *
         * @param {number} minTimestamp
         * @param {number} maxCount
         * @return {Array<string>}
         *
         * @private
         */
        async expireEntries(minTimestamp, maxCount) {
          const db = await this.getDb();
          let cursor = await db.transaction(CACHE_OBJECT_STORE).store.index("timestamp").openCursor(null, "prev");
          const entriesToDelete = [];
          let entriesNotDeletedCount = 0;
          while (cursor) {
            const result = cursor.value;
            if (result.cacheName === this._cacheName) {
              if (minTimestamp && result.timestamp < minTimestamp || maxCount && entriesNotDeletedCount >= maxCount) {
                entriesToDelete.push(cursor.value);
              } else {
                entriesNotDeletedCount++;
              }
            }
            cursor = await cursor.continue();
          }
          const urlsDeleted = [];
          for (const entry of entriesToDelete) {
            await db.delete(CACHE_OBJECT_STORE, entry.id);
            urlsDeleted.push(entry.url);
          }
          return urlsDeleted;
        }
        /**
         * Takes a URL and returns an ID that will be unique in the object store.
         *
         * @param {string} url
         * @return {string}
         *
         * @private
         */
        _getId(url) {
          return this._cacheName + "|" + normalizeURL(url);
        }
        /**
         * Returns an open connection to the database.
         *
         * @private
         */
        async getDb() {
          if (!this._db) {
            this._db = await openDB(DB_NAME, 1, {
              upgrade: this._upgradeDbAndDeleteOldDbs.bind(this)
            });
          }
          return this._db;
        }
      };
    }
  });

  // ../../node_modules/.pnpm/workbox-expiration@6.5.4/node_modules/workbox-expiration/CacheExpiration.js
  var CacheExpiration;
  var init_CacheExpiration = __esm({
    "../../node_modules/.pnpm/workbox-expiration@6.5.4/node_modules/workbox-expiration/CacheExpiration.js"() {
      init_assert();
      init_dontWaitFor();
      init_logger();
      init_WorkboxError();
      init_CacheTimestampsModel();
      init_version2();
      CacheExpiration = class {
        /**
         * To construct a new CacheExpiration instance you must provide at least
         * one of the `config` properties.
         *
         * @param {string} cacheName Name of the cache to apply restrictions to.
         * @param {Object} config
         * @param {number} [config.maxEntries] The maximum number of entries to cache.
         * Entries used the least will be removed as the maximum is reached.
         * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
         * it's treated as stale and removed.
         * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
         * that will be used when calling `delete()` on the cache.
         */
        constructor(cacheName, config = {}) {
          this._isRunning = false;
          this._rerunRequested = false;
          if (true) {
            finalAssertExports.isType(cacheName, "string", {
              moduleName: "workbox-expiration",
              className: "CacheExpiration",
              funcName: "constructor",
              paramName: "cacheName"
            });
            if (!(config.maxEntries || config.maxAgeSeconds)) {
              throw new WorkboxError("max-entries-or-age-required", {
                moduleName: "workbox-expiration",
                className: "CacheExpiration",
                funcName: "constructor"
              });
            }
            if (config.maxEntries) {
              finalAssertExports.isType(config.maxEntries, "number", {
                moduleName: "workbox-expiration",
                className: "CacheExpiration",
                funcName: "constructor",
                paramName: "config.maxEntries"
              });
            }
            if (config.maxAgeSeconds) {
              finalAssertExports.isType(config.maxAgeSeconds, "number", {
                moduleName: "workbox-expiration",
                className: "CacheExpiration",
                funcName: "constructor",
                paramName: "config.maxAgeSeconds"
              });
            }
          }
          this._maxEntries = config.maxEntries;
          this._maxAgeSeconds = config.maxAgeSeconds;
          this._matchOptions = config.matchOptions;
          this._cacheName = cacheName;
          this._timestampModel = new CacheTimestampsModel(cacheName);
        }
        /**
         * Expires entries for the given cache and given criteria.
         */
        async expireEntries() {
          if (this._isRunning) {
            this._rerunRequested = true;
            return;
          }
          this._isRunning = true;
          const minTimestamp = this._maxAgeSeconds ? Date.now() - this._maxAgeSeconds * 1e3 : 0;
          const urlsExpired = await this._timestampModel.expireEntries(minTimestamp, this._maxEntries);
          const cache = await self.caches.open(this._cacheName);
          for (const url of urlsExpired) {
            await cache.delete(url, this._matchOptions);
          }
          if (true) {
            if (urlsExpired.length > 0) {
              logger.groupCollapsed(`Expired ${urlsExpired.length} ${urlsExpired.length === 1 ? "entry" : "entries"} and removed ${urlsExpired.length === 1 ? "it" : "them"} from the '${this._cacheName}' cache.`);
              logger.log(`Expired the following ${urlsExpired.length === 1 ? "URL" : "URLs"}:`);
              urlsExpired.forEach((url) => logger.log(`    ${url}`));
              logger.groupEnd();
            } else {
              logger.debug(`Cache expiration ran and found no entries to remove.`);
            }
          }
          this._isRunning = false;
          if (this._rerunRequested) {
            this._rerunRequested = false;
            dontWaitFor(this.expireEntries());
          }
        }
        /**
         * Update the timestamp for the given URL. This ensures the when
         * removing entries based on maximum entries, most recently used
         * is accurate or when expiring, the timestamp is up-to-date.
         *
         * @param {string} url
         */
        async updateTimestamp(url) {
          if (true) {
            finalAssertExports.isType(url, "string", {
              moduleName: "workbox-expiration",
              className: "CacheExpiration",
              funcName: "updateTimestamp",
              paramName: "url"
            });
          }
          await this._timestampModel.setTimestamp(url, Date.now());
        }
        /**
         * Can be used to check if a URL has expired or not before it's used.
         *
         * This requires a look up from IndexedDB, so can be slow.
         *
         * Note: This method will not remove the cached entry, call
         * `expireEntries()` to remove indexedDB and Cache entries.
         *
         * @param {string} url
         * @return {boolean}
         */
        async isURLExpired(url) {
          if (!this._maxAgeSeconds) {
            if (true) {
              throw new WorkboxError(`expired-test-without-max-age`, {
                methodName: "isURLExpired",
                paramName: "maxAgeSeconds"
              });
            }
            return false;
          } else {
            const timestamp = await this._timestampModel.getTimestamp(url);
            const expireOlderThan = Date.now() - this._maxAgeSeconds * 1e3;
            return timestamp !== void 0 ? timestamp < expireOlderThan : true;
          }
        }
        /**
         * Removes the IndexedDB object store used to keep track of cache expiration
         * metadata.
         */
        async delete() {
          this._rerunRequested = false;
          await this._timestampModel.expireEntries(Infinity);
        }
      };
    }
  });

  // ../../node_modules/.pnpm/workbox-expiration@6.5.4/node_modules/workbox-expiration/ExpirationPlugin.js
  var ExpirationPlugin;
  var init_ExpirationPlugin = __esm({
    "../../node_modules/.pnpm/workbox-expiration@6.5.4/node_modules/workbox-expiration/ExpirationPlugin.js"() {
      init_assert();
      init_cacheNames();
      init_dontWaitFor();
      init_getFriendlyURL();
      init_logger();
      init_registerQuotaErrorCallback();
      init_WorkboxError();
      init_CacheExpiration();
      init_version2();
      ExpirationPlugin = class {
        /**
         * @param {ExpirationPluginOptions} config
         * @param {number} [config.maxEntries] The maximum number of entries to cache.
         * Entries used the least will be removed as the maximum is reached.
         * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
         * it's treated as stale and removed.
         * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
         * that will be used when calling `delete()` on the cache.
         * @param {boolean} [config.purgeOnQuotaError] Whether to opt this cache in to
         * automatic deletion if the available storage quota has been exceeded.
         */
        constructor(config = {}) {
          this.cachedResponseWillBeUsed = async ({ event, request, cacheName, cachedResponse }) => {
            if (!cachedResponse) {
              return null;
            }
            const isFresh = this._isResponseDateFresh(cachedResponse);
            const cacheExpiration = this._getCacheExpiration(cacheName);
            dontWaitFor(cacheExpiration.expireEntries());
            const updateTimestampDone = cacheExpiration.updateTimestamp(request.url);
            if (event) {
              try {
                event.waitUntil(updateTimestampDone);
              } catch (error) {
                if (true) {
                  if ("request" in event) {
                    logger.warn(`Unable to ensure service worker stays alive when updating cache entry for '${getFriendlyURL(event.request.url)}'.`);
                  }
                }
              }
            }
            return isFresh ? cachedResponse : null;
          };
          this.cacheDidUpdate = async ({ cacheName, request }) => {
            if (true) {
              finalAssertExports.isType(cacheName, "string", {
                moduleName: "workbox-expiration",
                className: "Plugin",
                funcName: "cacheDidUpdate",
                paramName: "cacheName"
              });
              finalAssertExports.isInstance(request, Request, {
                moduleName: "workbox-expiration",
                className: "Plugin",
                funcName: "cacheDidUpdate",
                paramName: "request"
              });
            }
            const cacheExpiration = this._getCacheExpiration(cacheName);
            await cacheExpiration.updateTimestamp(request.url);
            await cacheExpiration.expireEntries();
          };
          if (true) {
            if (!(config.maxEntries || config.maxAgeSeconds)) {
              throw new WorkboxError("max-entries-or-age-required", {
                moduleName: "workbox-expiration",
                className: "Plugin",
                funcName: "constructor"
              });
            }
            if (config.maxEntries) {
              finalAssertExports.isType(config.maxEntries, "number", {
                moduleName: "workbox-expiration",
                className: "Plugin",
                funcName: "constructor",
                paramName: "config.maxEntries"
              });
            }
            if (config.maxAgeSeconds) {
              finalAssertExports.isType(config.maxAgeSeconds, "number", {
                moduleName: "workbox-expiration",
                className: "Plugin",
                funcName: "constructor",
                paramName: "config.maxAgeSeconds"
              });
            }
          }
          this._config = config;
          this._maxAgeSeconds = config.maxAgeSeconds;
          this._cacheExpirations = /* @__PURE__ */ new Map();
          if (config.purgeOnQuotaError) {
            registerQuotaErrorCallback(() => this.deleteCacheAndMetadata());
          }
        }
        /**
         * A simple helper method to return a CacheExpiration instance for a given
         * cache name.
         *
         * @param {string} cacheName
         * @return {CacheExpiration}
         *
         * @private
         */
        _getCacheExpiration(cacheName) {
          if (cacheName === cacheNames.getRuntimeName()) {
            throw new WorkboxError("expire-custom-caches-only");
          }
          let cacheExpiration = this._cacheExpirations.get(cacheName);
          if (!cacheExpiration) {
            cacheExpiration = new CacheExpiration(cacheName, this._config);
            this._cacheExpirations.set(cacheName, cacheExpiration);
          }
          return cacheExpiration;
        }
        /**
         * @param {Response} cachedResponse
         * @return {boolean}
         *
         * @private
         */
        _isResponseDateFresh(cachedResponse) {
          if (!this._maxAgeSeconds) {
            return true;
          }
          const dateHeaderTimestamp = this._getDateHeaderTimestamp(cachedResponse);
          if (dateHeaderTimestamp === null) {
            return true;
          }
          const now = Date.now();
          return dateHeaderTimestamp >= now - this._maxAgeSeconds * 1e3;
        }
        /**
         * This method will extract the data header and parse it into a useful
         * value.
         *
         * @param {Response} cachedResponse
         * @return {number|null}
         *
         * @private
         */
        _getDateHeaderTimestamp(cachedResponse) {
          if (!cachedResponse.headers.has("date")) {
            return null;
          }
          const dateHeader = cachedResponse.headers.get("date");
          const parsedDate = new Date(dateHeader);
          const headerTime = parsedDate.getTime();
          if (isNaN(headerTime)) {
            return null;
          }
          return headerTime;
        }
        /**
         * This is a helper method that performs two operations:
         *
         * - Deletes *all* the underlying Cache instances associated with this plugin
         * instance, by calling caches.delete() on your behalf.
         * - Deletes the metadata from IndexedDB used to keep track of expiration
         * details for each Cache instance.
         *
         * When using cache expiration, calling this method is preferable to calling
         * `caches.delete()` directly, since this will ensure that the IndexedDB
         * metadata is also cleanly removed and open IndexedDB instances are deleted.
         *
         * Note that if you're *not* using cache expiration for a given cache, calling
         * `caches.delete()` and passing in the cache's name should be sufficient.
         * There is no Workbox-specific method needed for cleanup in that case.
         */
        async deleteCacheAndMetadata() {
          for (const [cacheName, cacheExpiration] of this._cacheExpirations) {
            await self.caches.delete(cacheName);
            await cacheExpiration.delete();
          }
          this._cacheExpirations = /* @__PURE__ */ new Map();
        }
      };
    }
  });

  // ../../node_modules/.pnpm/workbox-expiration@6.5.4/node_modules/workbox-expiration/index.js
  var init_workbox_expiration = __esm({
    "../../node_modules/.pnpm/workbox-expiration@6.5.4/node_modules/workbox-expiration/index.js"() {
      init_CacheExpiration();
      init_ExpirationPlugin();
      init_version2();
    }
  });

  // ../../node_modules/.pnpm/workbox-expiration@6.5.4/node_modules/workbox-expiration/index.mjs
  var init_workbox_expiration2 = __esm({
    "../../node_modules/.pnpm/workbox-expiration@6.5.4/node_modules/workbox-expiration/index.mjs"() {
      init_workbox_expiration();
    }
  });

  // ../../node_modules/.pnpm/workbox-routing@6.5.4/node_modules/workbox-routing/_version.js
  var init_version3 = __esm({
    "../../node_modules/.pnpm/workbox-routing@6.5.4/node_modules/workbox-routing/_version.js"() {
      "use strict";
      try {
        self["workbox:routing:6.5.3"] && _();
      } catch (e) {
      }
    }
  });

  // ../../node_modules/.pnpm/workbox-routing@6.5.4/node_modules/workbox-routing/utils/constants.js
  var defaultMethod, validMethods;
  var init_constants = __esm({
    "../../node_modules/.pnpm/workbox-routing@6.5.4/node_modules/workbox-routing/utils/constants.js"() {
      init_version3();
      defaultMethod = "GET";
      validMethods = [
        "DELETE",
        "GET",
        "HEAD",
        "PATCH",
        "POST",
        "PUT"
      ];
    }
  });

  // ../../node_modules/.pnpm/workbox-routing@6.5.4/node_modules/workbox-routing/utils/normalizeHandler.js
  var normalizeHandler;
  var init_normalizeHandler = __esm({
    "../../node_modules/.pnpm/workbox-routing@6.5.4/node_modules/workbox-routing/utils/normalizeHandler.js"() {
      init_assert();
      init_version3();
      normalizeHandler = (handler) => {
        if (handler && typeof handler === "object") {
          if (true) {
            finalAssertExports.hasMethod(handler, "handle", {
              moduleName: "workbox-routing",
              className: "Route",
              funcName: "constructor",
              paramName: "handler"
            });
          }
          return handler;
        } else {
          if (true) {
            finalAssertExports.isType(handler, "function", {
              moduleName: "workbox-routing",
              className: "Route",
              funcName: "constructor",
              paramName: "handler"
            });
          }
          return { handle: handler };
        }
      };
    }
  });

  // ../../node_modules/.pnpm/workbox-routing@6.5.4/node_modules/workbox-routing/Route.js
  var Route;
  var init_Route = __esm({
    "../../node_modules/.pnpm/workbox-routing@6.5.4/node_modules/workbox-routing/Route.js"() {
      init_assert();
      init_constants();
      init_normalizeHandler();
      init_version3();
      Route = class {
        /**
         * Constructor for Route class.
         *
         * @param {workbox-routing~matchCallback} match
         * A callback function that determines whether the route matches a given
         * `fetch` event by returning a non-falsy value.
         * @param {workbox-routing~handlerCallback} handler A callback
         * function that returns a Promise resolving to a Response.
         * @param {string} [method='GET'] The HTTP method to match the Route
         * against.
         */
        constructor(match, handler, method = defaultMethod) {
          if (true) {
            finalAssertExports.isType(match, "function", {
              moduleName: "workbox-routing",
              className: "Route",
              funcName: "constructor",
              paramName: "match"
            });
            if (method) {
              finalAssertExports.isOneOf(method, validMethods, { paramName: "method" });
            }
          }
          this.handler = normalizeHandler(handler);
          this.match = match;
          this.method = method;
        }
        /**
         *
         * @param {workbox-routing-handlerCallback} handler A callback
         * function that returns a Promise resolving to a Response
         */
        setCatchHandler(handler) {
          this.catchHandler = normalizeHandler(handler);
        }
      };
    }
  });

  // ../../node_modules/.pnpm/workbox-routing@6.5.4/node_modules/workbox-routing/NavigationRoute.js
  var init_NavigationRoute = __esm({
    "../../node_modules/.pnpm/workbox-routing@6.5.4/node_modules/workbox-routing/NavigationRoute.js"() {
      init_assert();
      init_logger();
      init_Route();
      init_version3();
    }
  });

  // ../../node_modules/.pnpm/workbox-routing@6.5.4/node_modules/workbox-routing/RegExpRoute.js
  var RegExpRoute;
  var init_RegExpRoute = __esm({
    "../../node_modules/.pnpm/workbox-routing@6.5.4/node_modules/workbox-routing/RegExpRoute.js"() {
      init_assert();
      init_logger();
      init_Route();
      init_version3();
      RegExpRoute = class extends Route {
        /**
         * If the regular expression contains
         * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
         * the captured values will be passed to the
         * {@link workbox-routing~handlerCallback} `params`
         * argument.
         *
         * @param {RegExp} regExp The regular expression to match against URLs.
         * @param {workbox-routing~handlerCallback} handler A callback
         * function that returns a Promise resulting in a Response.
         * @param {string} [method='GET'] The HTTP method to match the Route
         * against.
         */
        constructor(regExp, handler, method) {
          if (true) {
            finalAssertExports.isInstance(regExp, RegExp, {
              moduleName: "workbox-routing",
              className: "RegExpRoute",
              funcName: "constructor",
              paramName: "pattern"
            });
          }
          const match = ({ url }) => {
            const result = regExp.exec(url.href);
            if (!result) {
              return;
            }
            if (url.origin !== location.origin && result.index !== 0) {
              if (true) {
                logger.debug(`The regular expression '${regExp.toString()}' only partially matched against the cross-origin URL '${url.toString()}'. RegExpRoute's will only handle cross-origin requests if they match the entire URL.`);
              }
              return;
            }
            return result.slice(1);
          };
          super(match, handler, method);
        }
      };
    }
  });

  // ../../node_modules/.pnpm/workbox-routing@6.5.4/node_modules/workbox-routing/Router.js
  var Router;
  var init_Router = __esm({
    "../../node_modules/.pnpm/workbox-routing@6.5.4/node_modules/workbox-routing/Router.js"() {
      init_assert();
      init_getFriendlyURL();
      init_constants();
      init_logger();
      init_normalizeHandler();
      init_WorkboxError();
      init_version3();
      Router = class {
        /**
         * Initializes a new Router.
         */
        constructor() {
          this._routes = /* @__PURE__ */ new Map();
          this._defaultHandlerMap = /* @__PURE__ */ new Map();
        }
        /**
         * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
         * method name ('GET', etc.) to an array of all the corresponding `Route`
         * instances that are registered.
         */
        get routes() {
          return this._routes;
        }
        /**
         * Adds a fetch event listener to respond to events when a route matches
         * the event's request.
         */
        addFetchListener() {
          self.addEventListener("fetch", (event) => {
            const { request } = event;
            const responsePromise = this.handleRequest({ request, event });
            if (responsePromise) {
              event.respondWith(responsePromise);
            }
          });
        }
        /**
         * Adds a message event listener for URLs to cache from the window.
         * This is useful to cache resources loaded on the page prior to when the
         * service worker started controlling it.
         *
         * The format of the message data sent from the window should be as follows.
         * Where the `urlsToCache` array may consist of URL strings or an array of
         * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
         *
         * ```
         * {
         *   type: 'CACHE_URLS',
         *   payload: {
         *     urlsToCache: [
         *       './script1.js',
         *       './script2.js',
         *       ['./script3.js', {mode: 'no-cors'}],
         *     ],
         *   },
         * }
         * ```
         */
        addCacheListener() {
          self.addEventListener("message", (event) => {
            if (event.data && event.data.type === "CACHE_URLS") {
              const { payload } = event.data;
              if (true) {
                logger.debug(`Caching URLs from the window`, payload.urlsToCache);
              }
              const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                if (typeof entry === "string") {
                  entry = [entry];
                }
                const request = new Request(...entry);
                return this.handleRequest({ request, event });
              }));
              event.waitUntil(requestPromises);
              if (event.ports && event.ports[0]) {
                void requestPromises.then(() => event.ports[0].postMessage(true));
              }
            }
          });
        }
        /**
         * Apply the routing rules to a FetchEvent object to get a Response from an
         * appropriate Route's handler.
         *
         * @param {Object} options
         * @param {Request} options.request The request to handle.
         * @param {ExtendableEvent} options.event The event that triggered the
         *     request.
         * @return {Promise<Response>|undefined} A promise is returned if a
         *     registered route can handle the request. If there is no matching
         *     route and there's no `defaultHandler`, `undefined` is returned.
         */
        handleRequest({ request, event }) {
          if (true) {
            finalAssertExports.isInstance(request, Request, {
              moduleName: "workbox-routing",
              className: "Router",
              funcName: "handleRequest",
              paramName: "options.request"
            });
          }
          const url = new URL(request.url, location.href);
          if (!url.protocol.startsWith("http")) {
            if (true) {
              logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
            }
            return;
          }
          const sameOrigin = url.origin === location.origin;
          const { params, route } = this.findMatchingRoute({
            event,
            request,
            sameOrigin,
            url
          });
          let handler = route && route.handler;
          const debugMessages = [];
          if (true) {
            if (handler) {
              debugMessages.push([`Found a route to handle this request:`, route]);
              if (params) {
                debugMessages.push([
                  `Passing the following params to the route's handler:`,
                  params
                ]);
              }
            }
          }
          const method = request.method;
          if (!handler && this._defaultHandlerMap.has(method)) {
            if (true) {
              debugMessages.push(`Failed to find a matching route. Falling back to the default handler for ${method}.`);
            }
            handler = this._defaultHandlerMap.get(method);
          }
          if (!handler) {
            if (true) {
              logger.debug(`No route found for: ${getFriendlyURL(url)}`);
            }
            return;
          }
          if (true) {
            logger.groupCollapsed(`Router is responding to: ${getFriendlyURL(url)}`);
            debugMessages.forEach((msg) => {
              if (Array.isArray(msg)) {
                logger.log(...msg);
              } else {
                logger.log(msg);
              }
            });
            logger.groupEnd();
          }
          let responsePromise;
          try {
            responsePromise = handler.handle({ url, request, event, params });
          } catch (err) {
            responsePromise = Promise.reject(err);
          }
          const catchHandler = route && route.catchHandler;
          if (responsePromise instanceof Promise && (this._catchHandler || catchHandler)) {
            responsePromise = responsePromise.catch(async (err) => {
              if (catchHandler) {
                if (true) {
                  logger.groupCollapsed(`Error thrown when responding to:  ${getFriendlyURL(url)}. Falling back to route's Catch Handler.`);
                  logger.error(`Error thrown by:`, route);
                  logger.error(err);
                  logger.groupEnd();
                }
                try {
                  return await catchHandler.handle({ url, request, event, params });
                } catch (catchErr) {
                  if (catchErr instanceof Error) {
                    err = catchErr;
                  }
                }
              }
              if (this._catchHandler) {
                if (true) {
                  logger.groupCollapsed(`Error thrown when responding to:  ${getFriendlyURL(url)}. Falling back to global Catch Handler.`);
                  logger.error(`Error thrown by:`, route);
                  logger.error(err);
                  logger.groupEnd();
                }
                return this._catchHandler.handle({ url, request, event });
              }
              throw err;
            });
          }
          return responsePromise;
        }
        /**
         * Checks a request and URL (and optionally an event) against the list of
         * registered routes, and if there's a match, returns the corresponding
         * route along with any params generated by the match.
         *
         * @param {Object} options
         * @param {URL} options.url
         * @param {boolean} options.sameOrigin The result of comparing `url.origin`
         *     against the current origin.
         * @param {Request} options.request The request to match.
         * @param {Event} options.event The corresponding event.
         * @return {Object} An object with `route` and `params` properties.
         *     They are populated if a matching route was found or `undefined`
         *     otherwise.
         */
        findMatchingRoute({ url, sameOrigin, request, event }) {
          const routes = this._routes.get(request.method) || [];
          for (const route of routes) {
            let params;
            const matchResult = route.match({ url, sameOrigin, request, event });
            if (matchResult) {
              if (true) {
                if (matchResult instanceof Promise) {
                  logger.warn(`While routing ${getFriendlyURL(url)}, an async matchCallback function was used. Please convert the following route to use a synchronous matchCallback function:`, route);
                }
              }
              params = matchResult;
              if (Array.isArray(params) && params.length === 0) {
                params = void 0;
              } else if (matchResult.constructor === Object && // eslint-disable-line
              Object.keys(matchResult).length === 0) {
                params = void 0;
              } else if (typeof matchResult === "boolean") {
                params = void 0;
              }
              return { route, params };
            }
          }
          return {};
        }
        /**
         * Define a default `handler` that's called when no routes explicitly
         * match the incoming request.
         *
         * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
         *
         * Without a default handler, unmatched requests will go against the
         * network as if there were no service worker present.
         *
         * @param {workbox-routing~handlerCallback} handler A callback
         * function that returns a Promise resulting in a Response.
         * @param {string} [method='GET'] The HTTP method to associate with this
         * default handler. Each method has its own default.
         */
        setDefaultHandler(handler, method = defaultMethod) {
          this._defaultHandlerMap.set(method, normalizeHandler(handler));
        }
        /**
         * If a Route throws an error while handling a request, this `handler`
         * will be called and given a chance to provide a response.
         *
         * @param {workbox-routing~handlerCallback} handler A callback
         * function that returns a Promise resulting in a Response.
         */
        setCatchHandler(handler) {
          this._catchHandler = normalizeHandler(handler);
        }
        /**
         * Registers a route with the router.
         *
         * @param {workbox-routing.Route} route The route to register.
         */
        registerRoute(route) {
          if (true) {
            finalAssertExports.isType(route, "object", {
              moduleName: "workbox-routing",
              className: "Router",
              funcName: "registerRoute",
              paramName: "route"
            });
            finalAssertExports.hasMethod(route, "match", {
              moduleName: "workbox-routing",
              className: "Router",
              funcName: "registerRoute",
              paramName: "route"
            });
            finalAssertExports.isType(route.handler, "object", {
              moduleName: "workbox-routing",
              className: "Router",
              funcName: "registerRoute",
              paramName: "route"
            });
            finalAssertExports.hasMethod(route.handler, "handle", {
              moduleName: "workbox-routing",
              className: "Router",
              funcName: "registerRoute",
              paramName: "route.handler"
            });
            finalAssertExports.isType(route.method, "string", {
              moduleName: "workbox-routing",
              className: "Router",
              funcName: "registerRoute",
              paramName: "route.method"
            });
          }
          if (!this._routes.has(route.method)) {
            this._routes.set(route.method, []);
          }
          this._routes.get(route.method).push(route);
        }
        /**
         * Unregisters a route with the router.
         *
         * @param {workbox-routing.Route} route The route to unregister.
         */
        unregisterRoute(route) {
          if (!this._routes.has(route.method)) {
            throw new WorkboxError("unregister-route-but-not-found-with-method", {
              method: route.method
            });
          }
          const routeIndex = this._routes.get(route.method).indexOf(route);
          if (routeIndex > -1) {
            this._routes.get(route.method).splice(routeIndex, 1);
          } else {
            throw new WorkboxError("unregister-route-route-not-registered");
          }
        }
      };
    }
  });

  // ../../node_modules/.pnpm/workbox-routing@6.5.4/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js
  var defaultRouter, getOrCreateDefaultRouter;
  var init_getOrCreateDefaultRouter = __esm({
    "../../node_modules/.pnpm/workbox-routing@6.5.4/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js"() {
      init_Router();
      init_version3();
      getOrCreateDefaultRouter = () => {
        if (!defaultRouter) {
          defaultRouter = new Router();
          defaultRouter.addFetchListener();
          defaultRouter.addCacheListener();
        }
        return defaultRouter;
      };
    }
  });

  // ../../node_modules/.pnpm/workbox-routing@6.5.4/node_modules/workbox-routing/registerRoute.js
  function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === "string") {
      const captureUrl = new URL(capture, location.href);
      if (true) {
        if (!(capture.startsWith("/") || capture.startsWith("http"))) {
          throw new WorkboxError("invalid-string", {
            moduleName: "workbox-routing",
            funcName: "registerRoute",
            paramName: "capture"
          });
        }
        const valueToCheck = capture.startsWith("http") ? captureUrl.pathname : capture;
        const wildcards = "[*:?+]";
        if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
          logger.debug(`The '$capture' parameter contains an Express-style wildcard character (${wildcards}). Strings are now always interpreted as exact matches; use a RegExp for partial or wildcard matches.`);
        }
      }
      const matchCallback = ({ url }) => {
        if (true) {
          if (url.pathname === captureUrl.pathname && url.origin !== captureUrl.origin) {
            logger.debug(`${capture} only partially matches the cross-origin URL ${url.toString()}. This route will only handle cross-origin requests if they match the entire URL.`);
          }
        }
        return url.href === captureUrl.href;
      };
      route = new Route(matchCallback, handler, method);
    } else if (capture instanceof RegExp) {
      route = new RegExpRoute(capture, handler, method);
    } else if (typeof capture === "function") {
      route = new Route(capture, handler, method);
    } else if (capture instanceof Route) {
      route = capture;
    } else {
      throw new WorkboxError("unsupported-route-type", {
        moduleName: "workbox-routing",
        funcName: "registerRoute",
        paramName: "capture"
      });
    }
    const defaultRouter2 = getOrCreateDefaultRouter();
    defaultRouter2.registerRoute(route);
    return route;
  }
  var init_registerRoute = __esm({
    "../../node_modules/.pnpm/workbox-routing@6.5.4/node_modules/workbox-routing/registerRoute.js"() {
      init_logger();
      init_WorkboxError();
      init_Route();
      init_RegExpRoute();
      init_getOrCreateDefaultRouter();
      init_version3();
    }
  });

  // ../../node_modules/.pnpm/workbox-routing@6.5.4/node_modules/workbox-routing/setCatchHandler.js
  var init_setCatchHandler = __esm({
    "../../node_modules/.pnpm/workbox-routing@6.5.4/node_modules/workbox-routing/setCatchHandler.js"() {
      init_getOrCreateDefaultRouter();
      init_version3();
    }
  });

  // ../../node_modules/.pnpm/workbox-routing@6.5.4/node_modules/workbox-routing/setDefaultHandler.js
  var init_setDefaultHandler = __esm({
    "../../node_modules/.pnpm/workbox-routing@6.5.4/node_modules/workbox-routing/setDefaultHandler.js"() {
      init_getOrCreateDefaultRouter();
      init_version3();
    }
  });

  // ../../node_modules/.pnpm/workbox-routing@6.5.4/node_modules/workbox-routing/index.js
  var init_workbox_routing = __esm({
    "../../node_modules/.pnpm/workbox-routing@6.5.4/node_modules/workbox-routing/index.js"() {
      init_NavigationRoute();
      init_RegExpRoute();
      init_registerRoute();
      init_Route();
      init_Router();
      init_setCatchHandler();
      init_setDefaultHandler();
      init_version3();
    }
  });

  // ../../node_modules/.pnpm/workbox-routing@6.5.4/node_modules/workbox-routing/index.mjs
  var init_workbox_routing2 = __esm({
    "../../node_modules/.pnpm/workbox-routing@6.5.4/node_modules/workbox-routing/index.mjs"() {
      init_workbox_routing();
    }
  });

  // ../../node_modules/.pnpm/workbox-strategies@6.5.4/node_modules/workbox-strategies/_version.js
  var init_version4 = __esm({
    "../../node_modules/.pnpm/workbox-strategies@6.5.4/node_modules/workbox-strategies/_version.js"() {
      "use strict";
      try {
        self["workbox:strategies:6.5.3"] && _();
      } catch (e) {
      }
    }
  });

  // ../../node_modules/.pnpm/workbox-strategies@6.5.4/node_modules/workbox-strategies/StrategyHandler.js
  function toRequest(input) {
    return typeof input === "string" ? new Request(input) : input;
  }
  var StrategyHandler;
  var init_StrategyHandler = __esm({
    "../../node_modules/.pnpm/workbox-strategies@6.5.4/node_modules/workbox-strategies/StrategyHandler.js"() {
      init_assert();
      init_cacheMatchIgnoreParams();
      init_Deferred();
      init_executeQuotaErrorCallbacks();
      init_getFriendlyURL();
      init_logger();
      init_timeout();
      init_WorkboxError();
      init_version4();
      StrategyHandler = class {
        /**
         * Creates a new instance associated with the passed strategy and event
         * that's handling the request.
         *
         * The constructor also initializes the state that will be passed to each of
         * the plugins handling this request.
         *
         * @param {workbox-strategies.Strategy} strategy
         * @param {Object} options
         * @param {Request|string} options.request A request to run this strategy for.
         * @param {ExtendableEvent} options.event The event associated with the
         *     request.
         * @param {URL} [options.url]
         * @param {*} [options.params] The return value from the
         *     {@link workbox-routing~matchCallback} (if applicable).
         */
        constructor(strategy, options) {
          this._cacheKeys = {};
          if (true) {
            finalAssertExports.isInstance(options.event, ExtendableEvent, {
              moduleName: "workbox-strategies",
              className: "StrategyHandler",
              funcName: "constructor",
              paramName: "options.event"
            });
          }
          Object.assign(this, options);
          this.event = options.event;
          this._strategy = strategy;
          this._handlerDeferred = new Deferred();
          this._extendLifetimePromises = [];
          this._plugins = [...strategy.plugins];
          this._pluginStateMap = /* @__PURE__ */ new Map();
          for (const plugin of this._plugins) {
            this._pluginStateMap.set(plugin, {});
          }
          this.event.waitUntil(this._handlerDeferred.promise);
        }
        /**
         * Fetches a given request (and invokes any applicable plugin callback
         * methods) using the `fetchOptions` (for non-navigation requests) and
         * `plugins` defined on the `Strategy` object.
         *
         * The following plugin lifecycle methods are invoked when using this method:
         * - `requestWillFetch()`
         * - `fetchDidSucceed()`
         * - `fetchDidFail()`
         *
         * @param {Request|string} input The URL or request to fetch.
         * @return {Promise<Response>}
         */
        async fetch(input) {
          const { event } = this;
          let request = toRequest(input);
          if (request.mode === "navigate" && event instanceof FetchEvent && event.preloadResponse) {
            const possiblePreloadResponse = await event.preloadResponse;
            if (possiblePreloadResponse) {
              if (true) {
                logger.log(`Using a preloaded navigation response for '${getFriendlyURL(request.url)}'`);
              }
              return possiblePreloadResponse;
            }
          }
          const originalRequest = this.hasCallback("fetchDidFail") ? request.clone() : null;
          try {
            for (const cb of this.iterateCallbacks("requestWillFetch")) {
              request = await cb({ request: request.clone(), event });
            }
          } catch (err) {
            if (err instanceof Error) {
              throw new WorkboxError("plugin-error-request-will-fetch", {
                thrownErrorMessage: err.message
              });
            }
          }
          const pluginFilteredRequest = request.clone();
          try {
            let fetchResponse;
            fetchResponse = await fetch(request, request.mode === "navigate" ? void 0 : this._strategy.fetchOptions);
            if (true) {
              logger.debug(`Network request for '${getFriendlyURL(request.url)}' returned a response with status '${fetchResponse.status}'.`);
            }
            for (const callback of this.iterateCallbacks("fetchDidSucceed")) {
              fetchResponse = await callback({
                event,
                request: pluginFilteredRequest,
                response: fetchResponse
              });
            }
            return fetchResponse;
          } catch (error) {
            if (true) {
              logger.log(`Network request for '${getFriendlyURL(request.url)}' threw an error.`, error);
            }
            if (originalRequest) {
              await this.runCallbacks("fetchDidFail", {
                error,
                event,
                originalRequest: originalRequest.clone(),
                request: pluginFilteredRequest.clone()
              });
            }
            throw error;
          }
        }
        /**
         * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
         * the response generated by `this.fetch()`.
         *
         * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
         * so you do not have to manually call `waitUntil()` on the event.
         *
         * @param {Request|string} input The request or URL to fetch and cache.
         * @return {Promise<Response>}
         */
        async fetchAndCachePut(input) {
          const response = await this.fetch(input);
          const responseClone = response.clone();
          void this.waitUntil(this.cachePut(input, responseClone));
          return response;
        }
        /**
         * Matches a request from the cache (and invokes any applicable plugin
         * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
         * defined on the strategy object.
         *
         * The following plugin lifecycle methods are invoked when using this method:
         * - cacheKeyWillByUsed()
         * - cachedResponseWillByUsed()
         *
         * @param {Request|string} key The Request or URL to use as the cache key.
         * @return {Promise<Response|undefined>} A matching response, if found.
         */
        async cacheMatch(key) {
          const request = toRequest(key);
          let cachedResponse;
          const { cacheName, matchOptions } = this._strategy;
          const effectiveRequest = await this.getCacheKey(request, "read");
          const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
          cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
          if (true) {
            if (cachedResponse) {
              logger.debug(`Found a cached response in '${cacheName}'.`);
            } else {
              logger.debug(`No cached response found in '${cacheName}'.`);
            }
          }
          for (const callback of this.iterateCallbacks("cachedResponseWillBeUsed")) {
            cachedResponse = await callback({
              cacheName,
              matchOptions,
              cachedResponse,
              request: effectiveRequest,
              event: this.event
            }) || void 0;
          }
          return cachedResponse;
        }
        /**
         * Puts a request/response pair in the cache (and invokes any applicable
         * plugin callback methods) using the `cacheName` and `plugins` defined on
         * the strategy object.
         *
         * The following plugin lifecycle methods are invoked when using this method:
         * - cacheKeyWillByUsed()
         * - cacheWillUpdate()
         * - cacheDidUpdate()
         *
         * @param {Request|string} key The request or URL to use as the cache key.
         * @param {Response} response The response to cache.
         * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
         * not be cached, and `true` otherwise.
         */
        async cachePut(key, response) {
          const request = toRequest(key);
          await timeout(0);
          const effectiveRequest = await this.getCacheKey(request, "write");
          if (true) {
            if (effectiveRequest.method && effectiveRequest.method !== "GET") {
              throw new WorkboxError("attempt-to-cache-non-get-request", {
                url: getFriendlyURL(effectiveRequest.url),
                method: effectiveRequest.method
              });
            }
            const vary = response.headers.get("Vary");
            if (vary) {
              logger.debug(`The response for ${getFriendlyURL(effectiveRequest.url)} has a 'Vary: ${vary}' header. Consider setting the {ignoreVary: true} option on your strategy to ensure cache matching and deletion works as expected.`);
            }
          }
          if (!response) {
            if (true) {
              logger.error(`Cannot cache non-existent response for '${getFriendlyURL(effectiveRequest.url)}'.`);
            }
            throw new WorkboxError("cache-put-with-no-response", {
              url: getFriendlyURL(effectiveRequest.url)
            });
          }
          const responseToCache = await this._ensureResponseSafeToCache(response);
          if (!responseToCache) {
            if (true) {
              logger.debug(`Response '${getFriendlyURL(effectiveRequest.url)}' will not be cached.`, responseToCache);
            }
            return false;
          }
          const { cacheName, matchOptions } = this._strategy;
          const cache = await self.caches.open(cacheName);
          const hasCacheUpdateCallback = this.hasCallback("cacheDidUpdate");
          const oldResponse = hasCacheUpdateCallback ? await cacheMatchIgnoreParams(
            // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
            // feature. Consider into ways to only add this behavior if using
            // precaching.
            cache,
            effectiveRequest.clone(),
            ["__WB_REVISION__"],
            matchOptions
          ) : null;
          if (true) {
            logger.debug(`Updating the '${cacheName}' cache with a new Response for ${getFriendlyURL(effectiveRequest.url)}.`);
          }
          try {
            await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
          } catch (error) {
            if (error instanceof Error) {
              if (error.name === "QuotaExceededError") {
                await executeQuotaErrorCallbacks();
              }
              throw error;
            }
          }
          for (const callback of this.iterateCallbacks("cacheDidUpdate")) {
            await callback({
              cacheName,
              oldResponse,
              newResponse: responseToCache.clone(),
              request: effectiveRequest,
              event: this.event
            });
          }
          return true;
        }
        /**
         * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
         * executes any of those callbacks found in sequence. The final `Request`
         * object returned by the last plugin is treated as the cache key for cache
         * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
         * been registered, the passed request is returned unmodified
         *
         * @param {Request} request
         * @param {string} mode
         * @return {Promise<Request>}
         */
        async getCacheKey(request, mode) {
          const key = `${request.url} | ${mode}`;
          if (!this._cacheKeys[key]) {
            let effectiveRequest = request;
            for (const callback of this.iterateCallbacks("cacheKeyWillBeUsed")) {
              effectiveRequest = toRequest(await callback({
                mode,
                request: effectiveRequest,
                event: this.event,
                // params has a type any can't change right now.
                params: this.params
                // eslint-disable-line
              }));
            }
            this._cacheKeys[key] = effectiveRequest;
          }
          return this._cacheKeys[key];
        }
        /**
         * Returns true if the strategy has at least one plugin with the given
         * callback.
         *
         * @param {string} name The name of the callback to check for.
         * @return {boolean}
         */
        hasCallback(name) {
          for (const plugin of this._strategy.plugins) {
            if (name in plugin) {
              return true;
            }
          }
          return false;
        }
        /**
         * Runs all plugin callbacks matching the given name, in order, passing the
         * given param object (merged ith the current plugin state) as the only
         * argument.
         *
         * Note: since this method runs all plugins, it's not suitable for cases
         * where the return value of a callback needs to be applied prior to calling
         * the next callback. See
         * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
         * below for how to handle that case.
         *
         * @param {string} name The name of the callback to run within each plugin.
         * @param {Object} param The object to pass as the first (and only) param
         *     when executing each callback. This object will be merged with the
         *     current plugin state prior to callback execution.
         */
        async runCallbacks(name, param) {
          for (const callback of this.iterateCallbacks(name)) {
            await callback(param);
          }
        }
        /**
         * Accepts a callback and returns an iterable of matching plugin callbacks,
         * where each callback is wrapped with the current handler state (i.e. when
         * you call each callback, whatever object parameter you pass it will
         * be merged with the plugin's current state).
         *
         * @param {string} name The name fo the callback to run
         * @return {Array<Function>}
         */
        *iterateCallbacks(name) {
          for (const plugin of this._strategy.plugins) {
            if (typeof plugin[name] === "function") {
              const state = this._pluginStateMap.get(plugin);
              const statefulCallback = (param) => {
                const statefulParam = Object.assign(Object.assign({}, param), { state });
                return plugin[name](statefulParam);
              };
              yield statefulCallback;
            }
          }
        }
        /**
         * Adds a promise to the
         * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
         * of the event event associated with the request being handled (usually a
         * `FetchEvent`).
         *
         * Note: you can await
         * {@link workbox-strategies.StrategyHandler~doneWaiting}
         * to know when all added promises have settled.
         *
         * @param {Promise} promise A promise to add to the extend lifetime promises
         *     of the event that triggered the request.
         */
        waitUntil(promise) {
          this._extendLifetimePromises.push(promise);
          return promise;
        }
        /**
         * Returns a promise that resolves once all promises passed to
         * {@link workbox-strategies.StrategyHandler~waitUntil}
         * have settled.
         *
         * Note: any work done after `doneWaiting()` settles should be manually
         * passed to an event's `waitUntil()` method (not this handler's
         * `waitUntil()` method), otherwise the service worker thread my be killed
         * prior to your work completing.
         */
        async doneWaiting() {
          let promise;
          while (promise = this._extendLifetimePromises.shift()) {
            await promise;
          }
        }
        /**
         * Stops running the strategy and immediately resolves any pending
         * `waitUntil()` promises.
         */
        destroy() {
          this._handlerDeferred.resolve(null);
        }
        /**
         * This method will call cacheWillUpdate on the available plugins (or use
         * status === 200) to determine if the Response is safe and valid to cache.
         *
         * @param {Request} options.request
         * @param {Response} options.response
         * @return {Promise<Response|undefined>}
         *
         * @private
         */
        async _ensureResponseSafeToCache(response) {
          let responseToCache = response;
          let pluginsUsed = false;
          for (const callback of this.iterateCallbacks("cacheWillUpdate")) {
            responseToCache = await callback({
              request: this.request,
              response: responseToCache,
              event: this.event
            }) || void 0;
            pluginsUsed = true;
            if (!responseToCache) {
              break;
            }
          }
          if (!pluginsUsed) {
            if (responseToCache && responseToCache.status !== 200) {
              responseToCache = void 0;
            }
            if (true) {
              if (responseToCache) {
                if (responseToCache.status !== 200) {
                  if (responseToCache.status === 0) {
                    logger.warn(`The response for '${this.request.url}' is an opaque response. The caching strategy that you're using will not cache opaque responses by default.`);
                  } else {
                    logger.debug(`The response for '${this.request.url}' returned a status code of '${response.status}' and won't be cached as a result.`);
                  }
                }
              }
            }
          }
          return responseToCache;
        }
      };
    }
  });

  // ../../node_modules/.pnpm/workbox-strategies@6.5.4/node_modules/workbox-strategies/Strategy.js
  var Strategy;
  var init_Strategy = __esm({
    "../../node_modules/.pnpm/workbox-strategies@6.5.4/node_modules/workbox-strategies/Strategy.js"() {
      init_cacheNames();
      init_WorkboxError();
      init_logger();
      init_getFriendlyURL();
      init_StrategyHandler();
      init_version4();
      Strategy = class {
        /**
         * Creates a new instance of the strategy and sets all documented option
         * properties as public instance properties.
         *
         * Note: if a custom strategy class extends the base Strategy class and does
         * not need more than these properties, it does not need to define its own
         * constructor.
         *
         * @param {Object} [options]
         * @param {string} [options.cacheName] Cache name to store and retrieve
         * requests. Defaults to the cache names provided by
         * {@link workbox-core.cacheNames}.
         * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
         * to use in conjunction with this caching strategy.
         * @param {Object} [options.fetchOptions] Values passed along to the
         * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
         * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
         * `fetch()` requests made by this strategy.
         * @param {Object} [options.matchOptions] The
         * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
         * for any `cache.match()` or `cache.put()` calls made by this strategy.
         */
        constructor(options = {}) {
          this.cacheName = cacheNames.getRuntimeName(options.cacheName);
          this.plugins = options.plugins || [];
          this.fetchOptions = options.fetchOptions;
          this.matchOptions = options.matchOptions;
        }
        /**
         * Perform a request strategy and returns a `Promise` that will resolve with
         * a `Response`, invoking all relevant plugin callbacks.
         *
         * When a strategy instance is registered with a Workbox
         * {@link workbox-routing.Route}, this method is automatically
         * called when the route matches.
         *
         * Alternatively, this method can be used in a standalone `FetchEvent`
         * listener by passing it to `event.respondWith()`.
         *
         * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
         *     properties listed below.
         * @param {Request|string} options.request A request to run this strategy for.
         * @param {ExtendableEvent} options.event The event associated with the
         *     request.
         * @param {URL} [options.url]
         * @param {*} [options.params]
         */
        handle(options) {
          const [responseDone] = this.handleAll(options);
          return responseDone;
        }
        /**
         * Similar to {@link workbox-strategies.Strategy~handle}, but
         * instead of just returning a `Promise` that resolves to a `Response` it
         * it will return an tuple of `[response, done]` promises, where the former
         * (`response`) is equivalent to what `handle()` returns, and the latter is a
         * Promise that will resolve once any promises that were added to
         * `event.waitUntil()` as part of performing the strategy have completed.
         *
         * You can await the `done` promise to ensure any extra work performed by
         * the strategy (usually caching responses) completes successfully.
         *
         * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
         *     properties listed below.
         * @param {Request|string} options.request A request to run this strategy for.
         * @param {ExtendableEvent} options.event The event associated with the
         *     request.
         * @param {URL} [options.url]
         * @param {*} [options.params]
         * @return {Array<Promise>} A tuple of [response, done]
         *     promises that can be used to determine when the response resolves as
         *     well as when the handler has completed all its work.
         */
        handleAll(options) {
          if (options instanceof FetchEvent) {
            options = {
              event: options,
              request: options.request
            };
          }
          const event = options.event;
          const request = typeof options.request === "string" ? new Request(options.request) : options.request;
          const params = "params" in options ? options.params : void 0;
          const handler = new StrategyHandler(this, { event, request, params });
          const responseDone = this._getResponse(handler, request, event);
          const handlerDone = this._awaitComplete(responseDone, handler, request, event);
          return [responseDone, handlerDone];
        }
        async _getResponse(handler, request, event) {
          await handler.runCallbacks("handlerWillStart", { event, request });
          let response = void 0;
          try {
            response = await this._handle(request, handler);
            if (!response || response.type === "error") {
              throw new WorkboxError("no-response", { url: request.url });
            }
          } catch (error) {
            if (error instanceof Error) {
              for (const callback of handler.iterateCallbacks("handlerDidError")) {
                response = await callback({ error, event, request });
                if (response) {
                  break;
                }
              }
            }
            if (!response) {
              throw error;
            } else if (true) {
              logger.log(`While responding to '${getFriendlyURL(request.url)}', an ${error instanceof Error ? error.toString() : ""} error occurred. Using a fallback response provided by a handlerDidError plugin.`);
            }
          }
          for (const callback of handler.iterateCallbacks("handlerWillRespond")) {
            response = await callback({ event, request, response });
          }
          return response;
        }
        async _awaitComplete(responseDone, handler, request, event) {
          let response;
          let error;
          try {
            response = await responseDone;
          } catch (error2) {
          }
          try {
            await handler.runCallbacks("handlerDidRespond", {
              event,
              request,
              response
            });
            await handler.doneWaiting();
          } catch (waitUntilError) {
            if (waitUntilError instanceof Error) {
              error = waitUntilError;
            }
          }
          await handler.runCallbacks("handlerDidComplete", {
            event,
            request,
            response,
            error
          });
          handler.destroy();
          if (error) {
            throw error;
          }
        }
      };
    }
  });

  // ../../node_modules/.pnpm/workbox-strategies@6.5.4/node_modules/workbox-strategies/utils/messages.js
  var messages2;
  var init_messages2 = __esm({
    "../../node_modules/.pnpm/workbox-strategies@6.5.4/node_modules/workbox-strategies/utils/messages.js"() {
      init_logger();
      init_getFriendlyURL();
      init_version4();
      messages2 = {
        strategyStart: (strategyName, request) => `Using ${strategyName} to respond to '${getFriendlyURL(request.url)}'`,
        printFinalResponse: (response) => {
          if (response) {
            logger.groupCollapsed(`View the final response here.`);
            logger.log(response || "[No response returned]");
            logger.groupEnd();
          }
        }
      };
    }
  });

  // ../../node_modules/.pnpm/workbox-strategies@6.5.4/node_modules/workbox-strategies/CacheFirst.js
  var init_CacheFirst = __esm({
    "../../node_modules/.pnpm/workbox-strategies@6.5.4/node_modules/workbox-strategies/CacheFirst.js"() {
      init_assert();
      init_logger();
      init_WorkboxError();
      init_Strategy();
      init_messages2();
      init_version4();
    }
  });

  // ../../node_modules/.pnpm/workbox-strategies@6.5.4/node_modules/workbox-strategies/CacheOnly.js
  var init_CacheOnly = __esm({
    "../../node_modules/.pnpm/workbox-strategies@6.5.4/node_modules/workbox-strategies/CacheOnly.js"() {
      init_assert();
      init_logger();
      init_WorkboxError();
      init_Strategy();
      init_messages2();
      init_version4();
    }
  });

  // ../../node_modules/.pnpm/workbox-strategies@6.5.4/node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js
  var cacheOkAndOpaquePlugin;
  var init_cacheOkAndOpaquePlugin = __esm({
    "../../node_modules/.pnpm/workbox-strategies@6.5.4/node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js"() {
      init_version4();
      cacheOkAndOpaquePlugin = {
        /**
         * Returns a valid response (to allow caching) if the status is 200 (OK) or
         * 0 (opaque).
         *
         * @param {Object} options
         * @param {Response} options.response
         * @return {Response|null}
         *
         * @private
         */
        cacheWillUpdate: async ({ response }) => {
          if (response.status === 200 || response.status === 0) {
            return response;
          }
          return null;
        }
      };
    }
  });

  // ../../node_modules/.pnpm/workbox-strategies@6.5.4/node_modules/workbox-strategies/NetworkFirst.js
  var init_NetworkFirst = __esm({
    "../../node_modules/.pnpm/workbox-strategies@6.5.4/node_modules/workbox-strategies/NetworkFirst.js"() {
      init_assert();
      init_logger();
      init_WorkboxError();
      init_cacheOkAndOpaquePlugin();
      init_Strategy();
      init_messages2();
      init_version4();
    }
  });

  // ../../node_modules/.pnpm/workbox-strategies@6.5.4/node_modules/workbox-strategies/NetworkOnly.js
  var NetworkOnly;
  var init_NetworkOnly = __esm({
    "../../node_modules/.pnpm/workbox-strategies@6.5.4/node_modules/workbox-strategies/NetworkOnly.js"() {
      init_assert();
      init_logger();
      init_timeout();
      init_WorkboxError();
      init_Strategy();
      init_messages2();
      init_version4();
      NetworkOnly = class extends Strategy {
        /**
         * @param {Object} [options]
         * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
         * to use in conjunction with this caching strategy.
         * @param {Object} [options.fetchOptions] Values passed along to the
         * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
         * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
         * `fetch()` requests made by this strategy.
         * @param {number} [options.networkTimeoutSeconds] If set, any network requests
         * that fail to respond within the timeout will result in a network error.
         */
        constructor(options = {}) {
          super(options);
          this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
        }
        /**
         * @private
         * @param {Request|string} request A request to run this strategy for.
         * @param {workbox-strategies.StrategyHandler} handler The event that
         *     triggered the request.
         * @return {Promise<Response>}
         */
        async _handle(request, handler) {
          if (true) {
            finalAssertExports.isInstance(request, Request, {
              moduleName: "workbox-strategies",
              className: this.constructor.name,
              funcName: "_handle",
              paramName: "request"
            });
          }
          let error = void 0;
          let response;
          try {
            const promises = [
              handler.fetch(request)
            ];
            if (this._networkTimeoutSeconds) {
              const timeoutPromise = timeout(this._networkTimeoutSeconds * 1e3);
              promises.push(timeoutPromise);
            }
            response = await Promise.race(promises);
            if (!response) {
              throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`);
            }
          } catch (err) {
            if (err instanceof Error) {
              error = err;
            }
          }
          if (true) {
            logger.groupCollapsed(messages2.strategyStart(this.constructor.name, request));
            if (response) {
              logger.log(`Got response from network.`);
            } else {
              logger.log(`Unable to get a response from the network.`);
            }
            messages2.printFinalResponse(response);
            logger.groupEnd();
          }
          if (!response) {
            throw new WorkboxError("no-response", { url: request.url, error });
          }
          return response;
        }
      };
    }
  });

  // ../../node_modules/.pnpm/workbox-strategies@6.5.4/node_modules/workbox-strategies/StaleWhileRevalidate.js
  var StaleWhileRevalidate;
  var init_StaleWhileRevalidate = __esm({
    "../../node_modules/.pnpm/workbox-strategies@6.5.4/node_modules/workbox-strategies/StaleWhileRevalidate.js"() {
      init_assert();
      init_logger();
      init_WorkboxError();
      init_cacheOkAndOpaquePlugin();
      init_Strategy();
      init_messages2();
      init_version4();
      StaleWhileRevalidate = class extends Strategy {
        /**
         * @param {Object} [options]
         * @param {string} [options.cacheName] Cache name to store and retrieve
         * requests. Defaults to cache names provided by
         * {@link workbox-core.cacheNames}.
         * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
         * to use in conjunction with this caching strategy.
         * @param {Object} [options.fetchOptions] Values passed along to the
         * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
         * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
         * `fetch()` requests made by this strategy.
         * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
         */
        constructor(options = {}) {
          super(options);
          if (!this.plugins.some((p) => "cacheWillUpdate" in p)) {
            this.plugins.unshift(cacheOkAndOpaquePlugin);
          }
        }
        /**
         * @private
         * @param {Request|string} request A request to run this strategy for.
         * @param {workbox-strategies.StrategyHandler} handler The event that
         *     triggered the request.
         * @return {Promise<Response>}
         */
        async _handle(request, handler) {
          const logs = [];
          if (true) {
            finalAssertExports.isInstance(request, Request, {
              moduleName: "workbox-strategies",
              className: this.constructor.name,
              funcName: "handle",
              paramName: "request"
            });
          }
          const fetchAndCachePromise = handler.fetchAndCachePut(request).catch(() => {
          });
          void handler.waitUntil(fetchAndCachePromise);
          let response = await handler.cacheMatch(request);
          let error;
          if (response) {
            if (true) {
              logs.push(`Found a cached response in the '${this.cacheName}' cache. Will update with the network response in the background.`);
            }
          } else {
            if (true) {
              logs.push(`No response found in the '${this.cacheName}' cache. Will wait for the network response.`);
            }
            try {
              response = await fetchAndCachePromise;
            } catch (err) {
              if (err instanceof Error) {
                error = err;
              }
            }
          }
          if (true) {
            logger.groupCollapsed(messages2.strategyStart(this.constructor.name, request));
            for (const log of logs) {
              logger.log(log);
            }
            messages2.printFinalResponse(response);
            logger.groupEnd();
          }
          if (!response) {
            throw new WorkboxError("no-response", { url: request.url, error });
          }
          return response;
        }
      };
    }
  });

  // ../../node_modules/.pnpm/workbox-strategies@6.5.4/node_modules/workbox-strategies/index.js
  var init_workbox_strategies = __esm({
    "../../node_modules/.pnpm/workbox-strategies@6.5.4/node_modules/workbox-strategies/index.js"() {
      init_CacheFirst();
      init_CacheOnly();
      init_NetworkFirst();
      init_NetworkOnly();
      init_StaleWhileRevalidate();
      init_Strategy();
      init_StrategyHandler();
      init_version4();
    }
  });

  // ../../node_modules/.pnpm/workbox-strategies@6.5.4/node_modules/workbox-strategies/index.mjs
  var init_workbox_strategies2 = __esm({
    "../../node_modules/.pnpm/workbox-strategies@6.5.4/node_modules/workbox-strategies/index.mjs"() {
      init_workbox_strategies();
    }
  });

  // src/service-worker.ts
  var require_service_worker = __commonJS({
    "src/service-worker.ts"() {
      init_workbox_core2();
      init_workbox_expiration2();
      init_workbox_routing2();
      init_workbox_strategies2();
      clientsClaim();
      var ignored = self.__WB_MANIFEST;
      var fileExtensionRegexp = new RegExp("/[^/?]+\\.[^/]+$");
      registerRoute(
        // Return false to exempt requests from being fulfilled by index.html.
        ({ request, url }) => {
          if (request.mode !== "navigate") {
            return false;
          }
          if (url.pathname.startsWith("/_")) {
            return false;
          }
          if (url.pathname.match(fileExtensionRegexp)) {
            return false;
          }
          return true;
        },
        // createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html'),
        new NetworkOnly()
      );
      registerRoute(
        // Add in any other file extensions or routing criteria as needed.
        ({ url, request }) => url.origin === self.location.origin && request.destination === "image",
        // Customize this strategy as needed, e.g., by changing to CacheFirst.
        new StaleWhileRevalidate({
          cacheName: "images",
          plugins: [
            // Ensure that once this runtime cache reaches a maximum size the
            // least-recently used images are removed.
            new ExpirationPlugin({ maxEntries: 50 })
          ]
        })
      );
      self.addEventListener("message", (event) => {
        if (event.data) {
          if (event.data.type === "SKIP_WAITING") {
            self.skipWaiting();
          } else if (event.data.type === "SKIP_WAITING_WHEN_SOLO") {
            self.clients.matchAll({
              includeUncontrolled: true
            }).then((clients) => {
              if (clients.length < 2) {
                self.skipWaiting();
              }
            });
          }
        }
      });
      self.addEventListener("notificationclick", (e) => {
        const notification = e.notification;
        notification.close();
        e.waitUntil(
          !notification.data.external ? self.clients.matchAll({ type: "window" }).then((clientsArr) => {
            if (clientsArr[0]) {
              clientsArr[0].focus();
              if (!notification.data.external) {
                clientsArr[0].postMessage({
                  type: "NOTIFICATION_CLICK",
                  url: notification.data.url
                });
              }
            } else {
              self.clients.openWindow(notification.data.url);
            }
          }) : self.clients.openWindow(notification.data.url)
        );
      });
    }
  });
  require_service_worker();
})();

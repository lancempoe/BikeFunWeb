bikefunfinder.onScriptDownloaded(['var __gwtModuleFunction = $wnd.bikefunfinder;\nvar $sendStats = __gwtModuleFunction.__sendStats;\n$sendStats(\'moduleStartup\', \'moduleEvalStart\');\nvar $gwt_version = "2.5.0";\nvar $strongName = \'\';\nvar $doc = $wnd.document;function __gwtStartLoadingFragment(frag) {\nvar fragFile = \'deferredjs/\' + $strongName + \'/\' + frag + \'.cache.js\';\nreturn __gwtModuleFunction.__startLoadingFragment(fragFile);\n}\nfunction __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}\nvar $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;\nvar $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;\n/******************************************************************************\n * Variables used by the Plugin\n *****************************************************************************/\nvar $entry;\nvar $hostedHtmlVersion="2.1";\n\nvar $errFn;\nvar $moduleName;\nvar $moduleBase;\nvar __gwt_getProperty;\n\n/******************************************************************************\n * WRITE ME - what does this invokes stuff do??? Probably related to invoking\n * calls...\n *****************************************************************************/\nvar __gwt_javaInvokes = [];\n\n// Wrapper to call JS methods, which we need both to be able to supply a\n// different this for method lookup and to get the exception back\nfunction __gwt_jsInvoke(thisObj, methodName) {\n try {\n   var args = Array.prototype.slice.call(arguments, 2);\n   return [0, window[methodName].apply(thisObj, args)];\n } catch (e) {\n   return [1, e];\n }\n}\n\nfunction __gwt_makeJavaInvoke(argCount) {\n  return __gwt_javaInvokes[argCount] || __gwt_doMakeJavaInvoke(argCount);\n}\n\nfunction __gwt_doMakeJavaInvoke(argCount) {\n  // IE6 won\'t eval() anonymous functions except as r-values\n  var argList = "";\n  for (var i = 0; i < argCount; i++) {\n    argList += ",p" + i;\n  }\n  var argListNoComma = argList.substring(1);\n\n  return eval(\n    "__gwt_javaInvokes[" + argCount + "] =\\n" +\n    "  function(thisObj, dispId" + argList + ") {\\n" +\n    "    var result = __static(dispId, thisObj" + argList + ");\\n" +\n    "    if (result[0]) {\\n" +\n    "      throw result[1];\\n" +\n    "    } else {\\n" +\n    "      return result[1];\\n" +\n    "    }\\n" +\n    "  }\\n"\n  ); \n}\n\n\n/******************************************************************************\n * Functions used to create tear-offs of Java methods.  Each function corresponds\n * to exactly one dispId, and also embeds the argument count.  We get the "this"\n * value from the context in which the function is being executed.\n * Function-object identity is preserved by caching in a sparse array.\n *****************************************************************************/\nvar __gwt_tearOffs = [];\nvar __gwt_tearOffGenerators = [];\nfunction __gwt_makeTearOff(proxy, dispId, argCount) {\n  return __gwt_tearOffs[dispId] || __gwt_doMakeTearOff(dispId, argCount);\n}\n\nfunction __gwt_doMakeTearOff(dispId, argCount) {\n  return __gwt_tearOffs[dispId] = \n      (__gwt_tearOffGenerators[argCount] || __gwt_doMakeTearOffGenerator(argCount))(dispId);\n}\n\nfunction __gwt_doMakeTearOffGenerator(argCount) {\n  // IE6 won\'t eval() anonymous functions except as r-values\n  var argList = "";\n  for (var i = 0; i < argCount; i++) {\n    argList += ",p" + i;\n  }\n  var argListNoComma = argList.substring(1);\n\n  return eval(\n    "__gwt_tearOffGenerators[" + argCount + "] =\\n" +\n    "  function(dispId) {\\n" +\n    "    return function(" + argListNoComma + ") {\\n" +\n    "      var result = __static(dispId, this" + argList + ");\\n" +\n    "      if (result[0]) {\\n" +\n    "        throw result[1];\\n" +\n    "      } else {\\n" +\n    "        return result[1];\\n" +\n    "      }\\n" +\n    "    }\\n" +\n    "  }\\n"\n  ); \n}\n\n\n/******************************************************************************\n *Code to give visual feedback when something goes wrong in Dev Mode\n *****************************************************************************/\nfunction __gwt_disconnected() {\n  // Prevent double-invocation.\n  window.__gwt_disconnected = new Function();\n  // Do it in a timeout so we can be sure we have a clean stack.\n  window.setTimeout(__gwt_disconnected_impl, 1);\n}\n\nfunction __gwt_disconnected_impl() {\n  __gwt_displayGlassMessage(\'GWT Code Server Disconnected\',\n      \'Most likely, you closed GWT Development Mode. Or, you might have lost \'\n      + \'network connectivity. To fix this, try restarting GWT Development Mode and \'\n      + \'refresh this page.\');\n}\n\n// Keep track of z-index to allow layering of multiple glass messages\nvar __gwt_glassMessageZIndex = 2147483647;\n\n// Note this method is also used by ModuleSpace.java\nfunction __gwt_displayGlassMessage(summary, details) {\n  var topWin = window.top;\n  var topDoc = topWin.document;\n  var outer = topDoc.createElement("div");\n  // Do not insert whitespace or outer.firstChild will get a text node.\n  outer.innerHTML = \n    \'<div style="position:absolute;z-index:\' + __gwt_glassMessageZIndex-- +\n    \';left:50px;top:50px;width:600px;color:#FFF;font-family:verdana;text-align:left;">\' +\n    \'<div style="font-size:30px;font-weight:bold;">\' + summary + \'<\/div>\' +\n    \'<div style="font-size:15px;">\' + details + \'<\/div>\' +\n    \'<\/div>\' +\n    \'<div style="position:absolute;z-index:\' + __gwt_glassMessageZIndex-- +\n    \';left:0px;top:0px;right:0px;bottom:0px;filter:alpha(opacity=60);opacity:0.6;background-color:#000;"><\/div>\'\n  ;\n  topDoc.body.appendChild(outer);\n  var glass = outer.firstChild;\n  var glassStyle = glass.style;\n\n  // Scroll to the top and remove scrollbars.\n  topWin.scrollTo(0, 0);\n  if (topDoc.compatMode == "BackCompat") {\n    topDoc.body.style["overflow"] = "hidden";\n  } else {\n    topDoc.documentElement.style["overflow"] = "hidden";\n  }\n\n  // Steal focus.\n  glass.focus();\n\n  if ((navigator.userAgent.indexOf("MSIE") >= 0) && (topDoc.compatMode == "BackCompat")) {\n    // IE quirks mode doesn\'t support right/bottom, but does support this.\n    glassStyle.width = "125%";\n    glassStyle.height = "100%";\n  } else if (navigator.userAgent.indexOf("MSIE 6") >= 0) {\n    // IE6 doesn\'t have a real standards mode, so we have to use hacks.\n    glassStyle.width = "125%"; // Get past scroll bar area.\n    // Nasty CSS; onresize would be better but the outer window won\'t let us add a listener IE.\n    glassStyle.setExpression("height", "document.documentElement.clientHeight");\n  }\n\n  $doc.title = summary + " [" + $doc.title + "]";\n}\n\n\n/******************************************************************************\n * Other functions called by the Plugin\n *****************************************************************************/\nfunction __gwt_makeResult(isException, result) {\n  return [isException, result];\n}\n\n//should be prefixed with "__gwt_"\nfunction fireOnModuleLoadStart(className) {\n  $sendStats("moduleStartup", "onModuleLoadStart");\n}\n\n\n/******************************************************************************\n * Helper functions for the Development Mode startup code. Listed alphabetically\n *****************************************************************************/\nfunction disconnectPlugin() {\n  try {\n    // wrap in try/catch since plugins are not required to supply this\n    plugin.disconnect();\n  } catch (e) {\n  }\n}\n\nfunction doBrowserSpecificFixes() {\n  var ua = navigator.userAgent.toLowerCase();\n  if (ua.indexOf("gecko") != -1) {\n    // install eval wrapper on FF to avoid EvalError problem\n    var __eval = window.eval;\n    window.eval = function(s) {\n      return __eval(s);\n    }\n  }\n  if (ua.indexOf("chrome") != -1) {\n    // work around __gwt_ObjectId appearing in JS objects\n    var hop = window.Object.prototype.hasOwnProperty;\n    window.Object.prototype.hasOwnProperty = function(prop) {\n      return prop != "__gwt_ObjectId" && hop.call(this, prop);\n    };\n    var hop2 = window.Object.prototype.propertyIsEnumerable;\n    window.Object.prototype.propertyIsEnumerable = function(prop) {\n      return prop != "__gwt_ObjectId" && hop2.call(this, prop);\n    };\n    // do the same in the main window if it is different from our window\n    if ($wnd != window) {\n      var hop3 = $wnd.Object.prototype.hasOwnProperty;\n      $wnd.Object.prototype.hasOwnProperty = function(prop) {\n        return prop != "__gwt_ObjectId" && hop3.call(this, prop);\n      };\n      var hop4 = $wnd.Object.prototype.propertyIsEnumerable;\n      $wnd.Object.prototype.propertyIsEnumerable = function(prop) {\n        return prop != "__gwt_ObjectId" && hop4.call(this, prop);\n      };\n    }\n  }\n}\n\nfunction embedPlugin() {\n  var embed = document.createElement(\'embed\');\n  embed.id = \'pluginEmbed\';\n  embed.type = \'application/x-gwt-hosted-mode\';\n  embed.width = \'10\';\n  embed.height = \'20\';\n\n  var obj = document.createElement(\'object\');\n  obj.id = \'pluginObject\';\n  obj.classid = \'clsid:1D6156B6-002B-49E7-B5CA-C138FB843B4E\';\n\n  document.body.appendChild(embed);\n  document.body.appendChild(obj);\n}\n\nfunction findPluginObject() {\n  try {\n    return document.getElementById(\'pluginObject\');\n  } catch (e) {\n    return null;\n  }\n}\n\nfunction findPluginEmbed() {\n  try {\n    return document.getElementById(\'pluginEmbed\')\n  } catch (e) {\n    return null;\n  }\n}\n\nfunction findPluginXPCOM() {\n  try {\n    return __gwt_HostedModePlugin;\n  } catch (e) {\n    return null;\n  }\n}\n\nfunction getCodeServer() {\n  var server = "localhost:9997";\n  var query = $wnd.location.search;\n  var idx = query.indexOf("gwt.codesvr=");\n  if (idx >= 0) {\n    idx += 12;  // "gwt.codesvr=".length == 12\n  } else {\n    idx = query.indexOf("gwt.codesvr.bikefunfinder=");\n    idx += (13 + "bikefunfinder".length);  // \n  }\n  if (idx >= 0) {\n    var amp = query.indexOf("&", idx);\n    if (amp >= 0) {\n      server = query.substring(idx, amp);\n    } else {\n      server = query.substring(idx);\n    }\n    // According to RFC 3986, some of this component\'s characters (e.g., \':\')\n    // are reserved and *may* be escaped.\n    return decodeURIComponent(server);\n  }\n}\n\nfunction generateSessionId() {\n  var ASCII_EXCLAMATION = 33;\n  var ASCII_TILDE = 126;\n  var chars = [];\n  for (var i = 0; i < 16; ++i) {\n    chars.push(Math.floor(ASCII_EXCLAMATION\n    + Math.random() * (ASCII_TILDE - ASCII_EXCLAMATION + 1)));\n  }\n  return String.fromCharCode.apply(null, chars);\n}\n\nfunction loadIframe(url) {\n  var topDoc = window.top.document;\n\n  // create an iframe\n  var iframeDiv = topDoc.createElement("div");\n  iframeDiv.innerHTML = "<iframe scrolling=no frameborder=0 src=\'" + url + "\'>";\n  var iframe = iframeDiv.firstChild;\n\n  // mess with the iframe style a little\n  var iframeStyle = iframe.style;\n  iframeStyle.position = "absolute";\n  iframeStyle.borderWidth = "0";\n  iframeStyle.left = "0";\n  iframeStyle.top = "0";\n  iframeStyle.width = "100%";\n  iframeStyle.backgroundColor = "#ffffff";\n  iframeStyle.zIndex = "1";\n  iframeStyle.height = "100%";\n\n  // update the top window\'s document\'s body\'s style\n  var hostBodyStyle = window.top.document.body.style; \n  hostBodyStyle.margin = "0";\n  hostBodyStyle.height = iframeStyle.height;\n  hostBodyStyle.overflow = "hidden";\n\n  // insert the iframe\n  topDoc.body.insertBefore(iframe, topDoc.body.firstChild);\n}\n\nfunction pluginConnectionError(codeServer) {\n  if ($errFn) {\n    $errFn($moduleName);\n  } else {\n    __gwt_displayGlassMessage(\n        "Plugin failed to connect to Development Mode server at " + simpleEscape(codeServer),\n        "Follow the troubleshooting instructions at "\n        + "<a href=\'http://code.google.com/p/google-web-toolkit/wiki/TroubleshootingOOPHM\'>"\n        + "http://code.google.com/p/google-web-toolkit/wiki/TroubleshootingOOPHM<\/a>");\n  }\n}\n\nfunction simpleEscape(originalString) {\n  return originalString.replace(/&/g,"&amp;")\n    .replace(/<\/g,"&lt;")\n    .replace(/>/g,"&gt;")\n    .replace(/\\\'/g, "&#39;")\n    .replace(/\\"/g,"&quot;");\n}\n\nfunction tryConnectingToPlugin(sessionId, url) {\n  // Note that the order is important\n  var pluginFinders = [findPluginXPCOM, findPluginObject, findPluginEmbed];\n  var codeServer = getCodeServer();\n  var plugin = null;\n  for (var i = 0; i < pluginFinders.length; ++i) {\n    try {\n      var maybePlugin = pluginFinders[i]();\n      if (maybePlugin != null && maybePlugin.init(window)) {\n        plugin = maybePlugin;\n        break;\n      }\n    } catch (e) {\n    }\n  }\n\n  if (plugin == null) {\n    // Plugin initialization failed. Show the missing-plugin page.\n    return null;\n  }\n  if (!plugin.connect(url, sessionId, codeServer, $moduleName,\n                      $hostedHtmlVersion)) {\n    // Connection failed. Show the error alert and troubleshooting page.\n    pluginConnectionError(codeServer);\n  }\n\n  return plugin;\n}\n\n\n/******************************************************************************\n * Development Mode startup code\n *****************************************************************************/\nfunction gwtOnLoad(errFn, moduleName, moduleBase, softPermutationId, computePropValue) {\n  $errFn = errFn;\n  $moduleName = moduleName;\n  $moduleBase = moduleBase;\n  __gwt_getProperty = computePropValue;\n  \n  window.onunload = function() { };\n  doBrowserSpecificFixes();\n\n  if (!findPluginXPCOM()) {\n    embedPlugin();\n  }\n\n  var topWin = window.top;\n  if (!topWin.__gwt_SessionID) {\n    topWin.__gwt_SessionID = generateSessionId();\n  }\n\n  var plugin = tryConnectingToPlugin(topWin.__gwt_SessionID, topWin.location.href);\n  if (plugin == null) {\n    loadIframe("http://gwt.google.com/missing-plugin/");\n  } else {\n    window.onUnload = disconnectPlugin();\n  }\n}\n$sendStats(\'moduleStartup\', \'moduleEvalEnd\');\ngwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);\n$sendStats(\'moduleStartup\', \'end\');\n//@ sourceURL=0.js\n']);

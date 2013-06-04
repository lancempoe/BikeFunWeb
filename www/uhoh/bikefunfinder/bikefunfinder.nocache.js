function bikefunfinder(){
  var $wnd_0 = window;
  var $doc_0 = document;
  sendStats('bootstrap', 'begin');
  function isHostedMode(){
    var query = $wnd_0.location.search;
    return query.indexOf('gwt.codesvr.bikefunfinder=') != -1 || query.indexOf('gwt.codesvr=') != -1;
  }

  function sendStats(evtGroupString, typeString){
    if ($wnd_0.__gwtStatsEvent) {
      $wnd_0.__gwtStatsEvent({moduleName:'bikefunfinder', sessionId:$wnd_0.__gwtStatsSessionId, subSystem:'startup', evtGroup:evtGroupString, millis:(new Date).getTime(), type:typeString});
    }
  }

  bikefunfinder.__sendStats = sendStats;
  bikefunfinder.__moduleName = 'bikefunfinder';
  bikefunfinder.__errFn = null;
  bikefunfinder.__moduleBase = 'DUMMY';
  bikefunfinder.__softPermutationId = 0;
  bikefunfinder.__computePropValue = null;
  bikefunfinder.__getPropMap = null;
  bikefunfinder.__gwtInstallCode = function(){
  }
  ;
  bikefunfinder.__gwtStartLoadingFragment = function(){
    return null;
  }
  ;
  var __gwt_isKnownPropertyValue = function(){
    return false;
  }
  ;
  var __gwt_getMetaProperty = function(){
    return null;
  }
  ;
  __propertyErrorFunction = null;
  var activeModules = $wnd_0.__gwt_activeModules = $wnd_0.__gwt_activeModules || {};
  activeModules['bikefunfinder'] = {moduleName:'bikefunfinder'};
  var frameDoc;
  function getInstallLocationDoc(){
    setupInstallLocation();
    return frameDoc;
  }

  function getInstallLocation(){
    setupInstallLocation();
    return frameDoc.getElementsByTagName('body')[0];
  }

  function setupInstallLocation(){
    if (frameDoc) {
      return;
    }
    var scriptFrame = $doc_0.createElement('iframe');
    scriptFrame.src = 'javascript:""';
    scriptFrame.id = 'bikefunfinder';
    scriptFrame.style.cssText = 'position:absolute; width:0; height:0; border:none; left: -1000px;' + ' top: -1000px;';
    scriptFrame.tabIndex = -1;
    $doc_0.body.appendChild(scriptFrame);
    frameDoc = scriptFrame.contentDocument;
    if (!frameDoc) {
      frameDoc = scriptFrame.contentWindow.document;
    }
    frameDoc.open();
    frameDoc.write('<html><head><\/head><body><\/body><\/html>');
    frameDoc.close();
    var frameDocbody = frameDoc.getElementsByTagName('body')[0];
    var script = frameDoc.createElement('script');
    script.language = 'javascript';
    var temp = 'var $wnd = window.parent;';
    script.text = temp;
    frameDocbody.appendChild(script);
  }

  function installScript(filename){
    function setupWaitForBodyLoad(callback){
      function isBodyLoaded(){
        if (typeof $doc_0.readyState == 'undefined') {
          return typeof $doc_0.body != 'undefined' && $doc_0.body != null;
        }
        return /loaded|complete/.test($doc_0.readyState);
      }

      var bodyDone = isBodyLoaded();
      if (bodyDone) {
        callback();
        return;
      }
      function onBodyDone(){
        if (!bodyDone) {
          bodyDone = true;
          callback();
          if ($doc_0.removeEventListener) {
            $doc_0.removeEventListener('DOMContentLoaded', onBodyDone, false);
          }
          if (onBodyDoneTimerId) {
            clearInterval(onBodyDoneTimerId);
          }
        }
      }

      if ($doc_0.addEventListener) {
        $doc_0.addEventListener('DOMContentLoaded', onBodyDone, false);
      }
      var onBodyDoneTimerId = setInterval(function(){
        if (isBodyLoaded()) {
          onBodyDone();
        }
      }
      , 50);
    }

    function installCode(code){
      function removeScript(body, element){
      }

      var docbody = getInstallLocation();
      var doc = getInstallLocationDoc();
      var script;
      if (navigator.userAgent.indexOf('Chrome') > -1 && window.JSON) {
        var scriptFrag = doc.createDocumentFragment();
        scriptFrag.appendChild(doc.createTextNode('eval("'));
        for (var i = 0; i < code.length; i++) {
          var c = window.JSON.stringify(code[i]);
          scriptFrag.appendChild(doc.createTextNode(c.substring(1, c.length - 1)));
        }
        scriptFrag.appendChild(doc.createTextNode('");'));
        script = doc.createElement('script');
        script.language = 'javascript';
        script.appendChild(scriptFrag);
        docbody.appendChild(script);
        removeScript(docbody, script);
      }
       else {
        for (var i = 0; i < code.length; i++) {
          script = doc.createElement('script');
          script.language = 'javascript';
          script.text = code[i];
          docbody.appendChild(script);
          removeScript(docbody, script);
        }
      }
    }

    bikefunfinder.onScriptDownloaded = function(code){
      setupWaitForBodyLoad(function(){
        installCode(code);
      }
      );
    }
    ;
    sendStats('moduleStartup', 'moduleRequested');
    var script_0 = $doc_0.createElement('script');
    script_0.src = filename;
    $doc_0.getElementsByTagName('head')[0].appendChild(script_0);
  }

  bikefunfinder.__startLoadingFragment = function(fragmentFile){
    return computeUrlForResource(fragmentFile);
  }
  ;
  bikefunfinder.__installRunAsyncCode = function(code){
    var docbody = getInstallLocation();
    var script = getInstallLocationDoc().createElement('script');
    script.language = 'javascript';
    script.text = code;
    docbody.appendChild(script);
  }
  ;
  function processMetas(){
    var metaProps = {};
    var propertyErrorFunc;
    var onLoadErrorFunc;
    var metas = $doc_0.getElementsByTagName('meta');
    for (var i = 0, n = metas.length; i < n; ++i) {
      var meta = metas[i], name_1 = meta.getAttribute('name'), content_0;
      if (name_1) {
        name_1 = name_1.replace('bikefunfinder::', '');
        if (name_1.indexOf('::') >= 0) {
          continue;
        }
        if (name_1 == 'gwt:property') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            var value_0, eq = content_0.indexOf('=');
            if (eq >= 0) {
              name_1 = content_0.substring(0, eq);
              value_0 = content_0.substring(eq + 1);
            }
             else {
              name_1 = content_0;
              value_0 = '';
            }
            metaProps[name_1] = value_0;
          }
        }
         else if (name_1 == 'gwt:onPropertyErrorFn') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            try {
              propertyErrorFunc = eval(content_0);
            }
             catch (e) {
              alert('Bad handler "' + content_0 + '" for "gwt:onPropertyErrorFn"');
            }
          }
        }
         else if (name_1 == 'gwt:onLoadErrorFn') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            try {
              onLoadErrorFunc = eval(content_0);
            }
             catch (e) {
              alert('Bad handler "' + content_0 + '" for "gwt:onLoadErrorFn"');
            }
          }
        }
      }
    }
    __gwt_getMetaProperty = function(name_0){
      var value = metaProps[name_0];
      return value == null?null:value;
    }
    ;
    __propertyErrorFunction = propertyErrorFunc;
    bikefunfinder.__errFn = onLoadErrorFunc;
  }

  function computeScriptBase(){
    function getDirectoryOfFile(path){
      var hashIndex = path.lastIndexOf('#');
      if (hashIndex == -1) {
        hashIndex = path.length;
      }
      var queryIndex = path.indexOf('?');
      if (queryIndex == -1) {
        queryIndex = path.length;
      }
      var slashIndex = path.lastIndexOf('/', Math.min(queryIndex, hashIndex));
      return slashIndex >= 0?path.substring(0, slashIndex + 1):'';
    }

    function ensureAbsoluteUrl(url){
      if (url.match(/^\w+:\/\//)) {
      }
       else {
        var img = $doc_0.createElement('img');
        img.src = url + 'clear.cache.gif';
        url = getDirectoryOfFile(img.src);
      }
      return url;
    }

    function tryMetaTag(){
      var metaVal = __gwt_getMetaProperty('baseUrl');
      if (metaVal != null) {
        return metaVal;
      }
      return '';
    }

    function tryNocacheJsTag(){
      var scriptTags = $doc_0.getElementsByTagName('script');
      for (var i = 0; i < scriptTags.length; ++i) {
        if (scriptTags[i].src.indexOf('bikefunfinder.nocache.js') != -1) {
          return getDirectoryOfFile(scriptTags[i].src);
        }
      }
      return '';
    }

    function tryBaseTag(){
      var baseElements = $doc_0.getElementsByTagName('base');
      if (baseElements.length > 0) {
        return baseElements[baseElements.length - 1].href;
      }
      return '';
    }

    function isLocationOk(){
      var loc = $doc_0.location;
      return loc.href == loc.protocol + '//' + loc.host + loc.pathname + loc.search + loc.hash;
    }

    var tempBase = tryMetaTag();
    if (tempBase == '') {
      tempBase = tryNocacheJsTag();
    }
    if (tempBase == '') {
      tempBase = tryBaseTag();
    }
    if (tempBase == '' && isLocationOk()) {
      tempBase = getDirectoryOfFile($doc_0.location.href);
    }
    tempBase = ensureAbsoluteUrl(tempBase);
    return tempBase;
  }

  function computeUrlForResource(resource){
    if (resource.match(/^\//)) {
      return resource;
    }
    if (resource.match(/^[a-zA-Z]+:\/\//)) {
      return resource;
    }
    return bikefunfinder.__moduleBase + resource;
  }

  function getCompiledCodeFilename(){
    var answers = [];
    var softPermutationId;
    function unflattenKeylistIntoAnswers(propValArray, value){
      var answer = answers;
      for (var i = 0, n = propValArray.length - 1; i < n; ++i) {
        answer = answer[propValArray[i]] || (answer[propValArray[i]] = []);
      }
      answer[propValArray[n]] = value;
    }

    var values = [];
    var providers = [];
    function computePropValue(propName){
      var value = providers[propName](), allowedValuesMap = values[propName];
      if (value in allowedValuesMap) {
        return value;
      }
      var allowedValuesList = [];
      for (var k in allowedValuesMap) {
        allowedValuesList[allowedValuesMap[k]] = k;
      }
      if (__propertyErrorFunc) {
        __propertyErrorFunc(propName, allowedValuesList, value);
      }
      throw null;
    }

    providers['mobile.user.agent'] = function(){
      return /(android|iphone|ipod|ipad)/i.test(window.navigator.userAgent)?'mobilesafari':'not_mobile';
    }
    ;
    values['mobile.user.agent'] = {mobilesafari:0, not_mobile:1};
    providers['phonegap.env'] = function(){
      {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.indexOf('android') != -1 || (ua.indexOf('ipad') != -1 || (ua.indexOf('ipod') != -1 || (ua.indexOf('iphone') != -1 || ua.indexOf('blackberry') != -1)))) {
          var url = document.location.href;
          if (url.indexOf('file://') === 0) {
            return 'yes';
          }
        }
        return 'no';
      }
    }
    ;
    values['phonegap.env'] = {no:0, yes:1};
    __gwt_isKnownPropertyValue = function(propName, propValue){
      return propValue in values[propName];
    }
    ;
    bikefunfinder.__getPropMap = function(){
      var result = {};
      for (var key in values) {
        result[key] = computePropValue(key);
      }
      return result;
    }
    ;
    bikefunfinder.__computePropValue = computePropValue;
    $wnd_0.__gwt_activeModules['bikefunfinder'].bindings = bikefunfinder.__getPropMap;
    sendStats('bootstrap', 'selectingPermutation');
    if (isHostedMode()) {
      return computeUrlForResource('bikefunfinder.devmode.js');
    }
    var strongName;
    try {
      unflattenKeylistIntoAnswers(['mobilesafari', 'yes'], '0ACB942E9F030547DDA1278DD138F453');
      unflattenKeylistIntoAnswers(['mobilesafari', 'no'], '13707120048815259B49B0B0CDA38946');
      unflattenKeylistIntoAnswers(['not_mobile', 'no'], '30F3B87C98097A75BDA945663BAC6965');
      unflattenKeylistIntoAnswers(['not_mobile', 'yes'], '48BF8CB9FE695CDBFD453D2903C75B1A');
      strongName = answers[computePropValue('mobile.user.agent')][computePropValue('phonegap.env')];
      var idx = strongName.indexOf(':');
      if (idx != -1) {
        softPermutationId = parseInt(strongName.substring(idx + 1), 10);
        strongName = strongName.substring(0, idx);
      }
    }
     catch (e) {
    }
    bikefunfinder.__softPermutationId = softPermutationId;
    return computeUrlForResource(strongName + '.cache.js');
  }

  function loadExternalStylesheets(){
    if (!$wnd_0.__gwt_stylesLoaded) {
      $wnd_0.__gwt_stylesLoaded = {};
    }
    sendStats('loadExternalRefs', 'begin');
    sendStats('loadExternalRefs', 'end');
  }

  processMetas();
  bikefunfinder.__moduleBase = computeScriptBase();
  activeModules['bikefunfinder'].moduleBase = bikefunfinder.__moduleBase;
  var filename_0 = getCompiledCodeFilename();
  loadExternalStylesheets();
  sendStats('bootstrap', 'end');
  installScript(filename_0);
  return true;
}

bikefunfinder.succeeded = bikefunfinder();

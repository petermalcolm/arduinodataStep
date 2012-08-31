/*
 * the scripts that are always necessary regardless of whether the
 * user is using the vle, authoring tool, or grading tool
 */
var coreScripts = [
	'vle/node/arduinodata/ArduinodataNode.js',
	'vle/node/arduinodata/arduinodataEvents.js'
];

//the scripts used in the vle
var studentVLEScripts = [
	'vle/node/arduinodata/arduinodata.js',
	'vle/node/arduinodata/arduinodataState.js',
	'vle/jquery/js/jquery-1.6.1.min.js',
	'vle/jquery/js/jquery-ui-1.8.7.custom.min.js'
];

//the scripts used in the authoring tool
var authorScripts = [
	'vle/node/arduinodata/authorview_arduinodata.js'
];

//the scripts used in the grading tool
var gradingScripts = [
	'vle/node/arduinodata/arduinodataState.js'
];

//dependencies when a file requires another file to be loaded before it
var dependencies = [
	{child:"vle/node/arduinodata/ArduinodataNode.js", parent:["vle/node/Node.js"]}
];

var nodeClasses = [
	{nodeClass:'display', nodeClassText:'Arduinodata'}
];

scriptloader.addScriptToComponent('core', coreScripts);
scriptloader.addScriptToComponent('core_min', coreScripts);
scriptloader.addScriptToComponent('arduinodata', studentVLEScripts);
scriptloader.addScriptToComponent('author', authorScripts);
scriptloader.addScriptToComponent('studentwork', gradingScripts);
scriptloader.addScriptToComponent('studentwork_min', gradingScripts);
scriptloader.addDependencies(dependencies);

componentloader.addNodeClasses('ArduinodataNode', nodeClasses);

var css = [
       	"vle/node/arduinodata/arduinodata.css"
];

scriptloader.addCssToComponent('arduinodata', css);

var nodeTemplateParams = [
	{
		nodeTemplateFilePath:'node/arduinodata/arduinodataTemplate.ad',
		nodeExtension:'ad'
	}
];

componentloader.addNodeTemplateParams('ArduinodataNode', nodeTemplateParams);

//used to notify scriptloader that this script has finished loading
if(typeof eventManager != 'undefined'){
	eventManager.fire('scriptLoaded', 'vle/node/arduinodata/setup.js');
};
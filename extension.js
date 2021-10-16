const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('Congratulations, your extension "format-selection-stub" is now active!');

	let disposable = vscode.commands.registerCommand('format-selection-stub.formatSelection', function () {
		vscode.commands.executeCommand("editor.action.formatDocument");

		var delay = vscode.workspace.getConfiguration().get('format-selection-stub.delay');

		setTimeout(function () {
			vscode.commands.executeCommand("editor.action.clipboardCopyAction");
			vscode.commands.executeCommand("undo");
			vscode.commands.executeCommand("editor.action.clipboardPasteAction");
		}, delay);
	});

	context.subscriptions.push(disposable);
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
}

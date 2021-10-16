# Format Selection Stub

## Features

This extention provides a single command: `format-selection-stub.formatSelection`.

It emulates "Format Selection" command when "Format Document" is available
(e.g. through external tools) but "Format Selection" is not.

It makes the following:
* User selects text to format.
* Invokes `format-selection-stub.formatSelection`.
* The extention:
    * runs "Format Document";
    * copies selected (and formatted) text;
    * undoes formatting;
    * pastes formatted text so that it replaces original text.

## Extension Settings

This extension contributes the following settings:

* `format-selection-stub.delay`: Time to wait for "Format Document" to complete.


/**
 * TableWire.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

import { ResizeWire } from '@ephox/snooker';
import { Insert } from '@ephox/sugar';
import { Remove } from '@ephox/sugar';
import { Body } from '@ephox/sugar';
import { Element } from '@ephox/sugar';
import { Css } from '@ephox/sugar';
import Util from '../alien/Util';

const createContainer = function () {
  const container = Element.fromTag('div');

  Css.setAll(container, {
    position: 'static',
    height: '0',
    width: '0',
    padding: '0',
    margin: '0',
    border: '0'
  });

  Insert.append(Body.body(), container);

  return container;
};

const get = function (editor, container?) {
  return editor.inline ? ResizeWire.body(Util.getBody(editor), createContainer()) : ResizeWire.only(Element.fromDom(editor.getDoc()));
};

const remove = function (editor, wire) {
  if (editor.inline) {
    Remove.remove(wire.parent());
  }
};

export default {
  get,
  remove
};
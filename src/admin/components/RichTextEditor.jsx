import React, { useEffect, useRef, useState } from 'react';

const tools = [
  { label: 'Paragraph', command: 'formatBlock', value: 'p' },
  { label: 'Heading 2', command: 'formatBlock', value: 'h2' },
  { label: 'Heading 3', command: 'formatBlock', value: 'h3' },
  { label: 'Bold', command: 'bold', value: null },
  { label: 'Italic', command: 'italic', value: null },
  { label: 'Underline', command: 'underline', value: null },
  { label: 'Bulleted list', command: 'insertUnorderedList', value: null },
  { label: 'Numbered list', command: 'insertOrderedList', value: null },
  { label: 'Blockquote', command: 'formatBlock', value: 'blockquote' },
];

export default function RichTextEditor({ value, onChange, invalid = false }) {
  const editorRef = useRef(null);
  const savedRangeRef = useRef(null);
  const [tableConfig, setTableConfig] = useState(null);
  const [tableSize, setTableSize] = useState({ columns: 3, rows: 4 });
  const [hasTable, setHasTable] = useState(false);

  const runCommand = (command, commandValue) => {
    editorRef.current?.focus();
    document.execCommand(command, false, commandValue);
    updateContent();
  };

  const updateContent = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
      setHasTable(Boolean(editorRef.current.querySelector('table')));
    }
  };

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value || '';
      setHasTable(Boolean(editorRef.current.querySelector('table')));
    }
  }, [value]);

  const insertLink = () => {
    const url = window.prompt('Enter a link URL');
    if (url) runCommand('createLink', url);
  };

  const insertImage = () => {
    const url = window.prompt('Enter an image URL');
    if (url) runCommand('insertImage', url);
  };

  const insertTable = () => {
    const columns = Math.min(10, Math.max(1, Number(tableSize.columns) || 1));
    const rows = Math.min(20, Math.max(1, Number(tableSize.rows) || 1));
    const cells = (tag, label) => Array.from({ length: columns }, (_, index) =>
      `<${tag}>${label} ${index + 1}</${tag}>`).join('');
    const bodyRows = Array.from({ length: Math.max(0, rows - 1) }, () =>
      `<tr>${cells('td', 'Cell')}</tr>`).join('');
    const html = `<table><thead><tr>${cells('th', 'Header')}</tr></thead><tbody>${bodyRows}</tbody></table><p><br></p>`;
    editorRef.current?.focus();
    const selection = window.getSelection();
    if (selection && savedRangeRef.current && editorRef.current?.contains(savedRangeRef.current.commonAncestorContainer)) {
      selection.removeAllRanges();
      selection.addRange(savedRangeRef.current);
    } else if (selection && editorRef.current) {
      const range = document.createRange();
      range.selectNodeContents(editorRef.current);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    }
    document.execCommand('insertHTML', false, html);
    updateContent();
    setTableConfig(null);
  };

  const selectedTable = () => {
    const selection = window.getSelection();
    let node = selection?.anchorNode;
    if (node?.nodeType === Node.TEXT_NODE) node = node.parentElement;
    const table = node?.closest?.('table');
    return table && editorRef.current?.contains(table) ? table : null;
  };

  const editTable = (action) => {
    const table = selectedTable();
    if (!table) return;
    const rows = Array.from(table.rows);
    const columns = rows[0]?.cells.length || 0;
    if (action === 'add-row' && rows.length < 20) {
      const row = table.insertRow(-1);
      for (let index = 0; index < columns; index += 1) row.insertCell().innerHTML = 'Cell';
    } else if (action === 'remove-row' && rows.length > 1) {
      table.deleteRow(rows.length - 1);
    } else if (action === 'add-column' && columns < 10) {
      rows.forEach((row, index) => {
        const cell = document.createElement(index === 0 && table.tHead?.contains(row) ? 'th' : 'td');
        cell.textContent = index === 0 ? `Header ${columns + 1}` : 'Cell';
        row.appendChild(cell);
      });
    } else if (action === 'remove-column' && columns > 1) {
      rows.forEach((row) => row.deleteCell(row.cells.length - 1));
    } else if (action === 'toggle-header') {
      const firstRow = rows[0];
      if (firstRow) {
        const currentlyHeader = firstRow.cells[0]?.tagName === 'TH';
        const section = currentlyHeader ? table.tBodies[0] || table : table.createTHead();
        if (currentlyHeader) {
          const bodyRow = document.createElement('tr');
          Array.from(firstRow.cells).forEach((oldCell) => {
            const cell = document.createElement('td');
            cell.innerHTML = oldCell.innerHTML;
            bodyRow.appendChild(cell);
          });
          firstRow.remove();
          section.insertBefore(bodyRow, section.firstChild);
        } else {
          const header = table.createTHead();
          const headerRow = document.createElement('tr');
          Array.from(firstRow.cells).forEach((oldCell) => {
            const cell = document.createElement('th');
            cell.innerHTML = oldCell.innerHTML;
            headerRow.appendChild(cell);
          });
          header.appendChild(headerRow);
          firstRow.remove();
        }
      }
    }
    updateContent();
  };

  return (
    <div className={`adm-editor${invalid ? ' is-invalid' : ''}`}>
      <div className="adm-editor-toolbar" role="toolbar" aria-label="Blog content formatting">
        {tools.map((tool) => (
          <button
            key={tool.label}
            type="button"
            className="adm-editor-btn"
            aria-label={tool.label}
            title={tool.label}
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => runCommand(tool.command, tool.value)}
          >
            {tool.label}
          </button>
        ))}
        <button type="button" className="adm-editor-btn" onMouseDown={(event) => event.preventDefault()} onClick={insertLink}>Link</button>
        <button type="button" className="adm-editor-btn" onMouseDown={(event) => event.preventDefault()} onClick={insertImage}>Image URL</button>
        <button type="button" className="adm-editor-btn" onMouseDown={(event) => { event.preventDefault(); const selection = window.getSelection(); if (selection?.rangeCount && editorRef.current?.contains(selection.getRangeAt(0).commonAncestorContainer)) { savedRangeRef.current = selection.getRangeAt(0).cloneRange(); } else if (editorRef.current) { const range = document.createRange(); range.selectNodeContents(editorRef.current); range.collapse(false); savedRangeRef.current = range; } }} onClick={() => setTableConfig({ columns: tableSize.columns, rows: tableSize.rows })}>Insert table</button>
        <button type="button" className="adm-editor-btn" onMouseDown={(event) => event.preventDefault()} onClick={() => runCommand('insertHTML', '<blockquote><p><strong>Important:</strong> Add your information here.</p></blockquote>')}>Info box</button>
      </div>
      {hasTable && (
        <div className="adm-editor-table-controls" aria-label="Table controls">
          <button type="button" className="adm-editor-btn" onMouseDown={(event) => event.preventDefault()} onClick={() => editTable('add-row')}>Add row</button>
          <button type="button" className="adm-editor-btn" onMouseDown={(event) => event.preventDefault()} onClick={() => editTable('remove-row')}>Remove last row</button>
          <button type="button" className="adm-editor-btn" onMouseDown={(event) => event.preventDefault()} onClick={() => editTable('add-column')}>Add column</button>
          <button type="button" className="adm-editor-btn" onMouseDown={(event) => event.preventDefault()} onClick={() => editTable('remove-column')}>Remove last column</button>
          <button type="button" className="adm-editor-btn" onMouseDown={(event) => event.preventDefault()} onClick={() => editTable('toggle-header')}>Toggle header row</button>
          <span className="adm-input-hint">Place the cursor in a table cell before using these controls.</span>
        </div>
      )}
      <div
        ref={editorRef}
        className="adm-editor-area"
        contentEditable
        role="textbox"
        aria-label="Blog content"
        aria-multiline="true"
        aria-invalid={invalid}
        suppressContentEditableWarning
        onInput={updateContent}
        onClick={() => setHasTable(Boolean(editorRef.current?.querySelector('table')))}
      />
      {tableConfig && (
        <div className="adm-editor-modal-backdrop" role="presentation">
          <div className="adm-editor-table-modal" role="dialog" aria-modal="true" aria-labelledby="table-modal-title">
            <h3 id="table-modal-title">Insert table</h3>
            <label className="adm-label" htmlFor="table-columns">Number of columns</label>
            <input id="table-columns" className="adm-input" type="number" min="1" max="10" value={tableSize.columns} onChange={(event) => setTableSize((current) => ({ ...current, columns: event.target.value }))} />
            <label className="adm-label" htmlFor="table-rows">Number of rows</label>
            <input id="table-rows" className="adm-input" type="number" min="1" max="20" value={tableSize.rows} onChange={(event) => setTableSize((current) => ({ ...current, rows: event.target.value }))} />
            <div className="adm-editor-modal-actions">
              <button type="button" className="adm-btn adm-btn-secondary" onClick={() => setTableConfig(null)}>Cancel</button>
              <button type="button" className="adm-btn adm-btn-primary" onClick={insertTable}>Insert table</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

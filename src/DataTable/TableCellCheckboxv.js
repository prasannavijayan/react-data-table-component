import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTableContext } from './DataTableContext';
import { CellBase } from './Cell';
import Checkbox from './Checkbox';

const TableCellCheckboxStyle = styled(CellBase)`
  flex: 0 0 48px;
  justify-content: center;
  align-items: center;
  user-select: none;
  white-space: nowrap;
`;

const TableCellCheckboxv = ({ name, row, selected }) => {
  const { dispatch, data, keyField, vSelectableRowsComponent, vSelectableRowsComponentProps, vSelectableRowDisabled } = useTableContext();
  const disabled = vSelectableRowDisabled && vSelectableRowDisabled(row);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleOnRowSelected = useCallback(() => dispatch({ type: 'SELECT_SINGLE_ROW', row, rows: data, isRowSelected: selected, keyField }), [data, selected, row]);

  return (
    <TableCellCheckboxStyle
      onClick={e => e.stopPropagation()}
      className="rdt_TableCell"
      noPadding
    >
      <Checkbox
        name={name}
        component={vSelectableRowsComponent}
        componentOptions={vSelectableRowsComponentProps}
        checked={selected}
        aria-checked={selected}
        onClick={handleOnRowSelected}
        disabled={disabled}
      />
    </TableCellCheckboxStyle>
  );
};

TableCellCheckboxv.propTypes = {
  name: PropTypes.string.isRequired,
  row: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default TableCellCheckboxv;
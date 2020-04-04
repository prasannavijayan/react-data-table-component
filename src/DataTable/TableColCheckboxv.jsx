import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTableContext } from './DataTableContext';
import { CellBase } from './Cell';
import Checkbox from './Checkbox';

const TableColStyle = styled(CellBase)`
  flex: 0 0 48px;
  justify-content: center;
  align-items: center;
  user-select: none;
  white-space: nowrap;
`;

const TableColCheckboxv = ({ head }) => {
  const { dispatch, data, selectedRows, allSelected, vSelectableRowsComponent, vSelectableRowsComponentProps, vSelectableRowDisabled } = useTableContext();
  const indeterminate = selectedRows.length > 0 && !allSelected;
  const rows = vSelectableRowDisabled ? data.filter(row => !vSelectableRowDisabled(row)) : data;
  const isDisabled = rows.length === 0;
  const handleSelectAll = () => dispatch({ type: 'V_SELECT_ALL_ROWS', rows });

  return (
    <TableColStyle className="rdt_TableCol" head={head} noPadding>
      <Checkbox
        name="select-all-rows"
        component={vSelectableRowsComponent}
        componentOptions={vSelectableRowsComponentProps}
        onClick={handleSelectAll}
        checked={allSelected}
        indeterminate={indeterminate}
        disabled={isDisabled}
      />
    </TableColStyle>
  );
};

TableColCheckboxv.propTypes = {
  head: PropTypes.bool,
};

TableColCheckboxv.defaultProps = {
  head: true,
};
export default TableColCheckboxv;

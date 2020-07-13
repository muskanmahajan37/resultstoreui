import React from 'react';
import { TableProps, InfiniteLoader } from 'react-virtualized';
import BaseTable, { SelfProps as BaseTableProps } from './BaseTable';

type Props = BaseTableProps & TableProps;

const InfiniteTable: React.FC<Props> = ({
    isRowLoaded,
    loadMoreRows,
    columns,
    width,
    height,
    rowHeight,
    headerHeight,
    rowCount,
    rowGetter,
    rowClassName,
    onRowClick,
    headerClass,
    cellClass,
    gridClass,
    onRowMouseOver,
    onRowMouseOut,
}) => {
    return (
        <InfiniteLoader
            isRowLoaded={isRowLoaded}
            loadMoreRows={loadMoreRows}
            rowCount={rowCount}
            threshold={15}
        >
            {({ onRowsRendered, registerChild }) => (
                <BaseTable
                    columns={columns}
                    width={width}
                    height={height}
                    rowHeight={rowHeight}
                    headerHeight={headerHeight}
                    onRowsRendered={onRowsRendered}
                    registerChild={registerChild}
                    rowCount={rowCount}
                    rowGetter={rowGetter}
                    rowClassName={rowClassName}
                    onRowClick={onRowClick}
                    cellClass={cellClass}
                    headerClass={headerClass}
                    gridClass={gridClass}
                    onRowMouseOver={onRowMouseOver}
                    onRowMouseOut={onRowMouseOut}
                />
            )}
        </InfiniteLoader>
    );
};

export default InfiniteTable;

'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ResourceWrapper } from './resource-types';
import { ChevronUp, ChevronDown } from 'lucide-react';

export const columns: ColumnDef<ResourceWrapper>[] = [
  {
    accessorKey: 'resource.metadata.resourceType',
    header: 'Resource Type',
  },
  {
    accessorKey: 'resource.metadata.createdTime',
    header: 'Time Created',
  },
  {
    accessorKey: 'resource.metadata.fetchTime',
    header: 'Fetched At Time',
  },
  {
    header: 'Expand',
    cell: ({ row }) => {
      return row.getCanExpand() ? (
        <button
          onClick={row.getToggleExpandedHandler()}
          style={{ cursor: 'pointer' }}
        >
          {row.getIsExpanded() ? <ChevronUp /> : <ChevronDown />}
        </button>
      ) : (
        ''
      );
    },
  },
];

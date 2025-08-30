'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ResourceWrapper } from './resource-types';

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
];

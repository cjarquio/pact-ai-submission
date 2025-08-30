import { columns } from './columns';
import { DataTable } from './data-table';
import {
  FHIRVersion,
  ProcessingState,
  ResourceWrapper,
} from './resource-types';

async function getData(): Promise<ResourceWrapper[]> {
  // Fetch data from your API here.
  return [
    {
      resource: {
        metadata: {
          state: ProcessingState.PROCESSING_STATE_PROCESSING,
          createdTime: '2011-10-05T14:48:00.000Z',
          fetchTime: '2025-08-23T14:48:00.000Z',
          processedTime: '2025-08-30T11:12:00.000Z',
          identifier: {
            key: 'test',
            uid: 'uniqueTest',
            patientId: 'patientsId',
          },
          resourceType: 'Source',
          version: FHIRVersion.FHIR_VERSION_UNSPECIFIED,
        },
        humanReadableStr: 'string',
        aiSummary: 'summary',
      },
    },
  ];
}

export const ResourcePage: React.FC = async () => {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default ResourcePage;

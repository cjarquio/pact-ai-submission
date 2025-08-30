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
          createdTime: '2023-11-01T10:00:00.000Z',
          fetchTime: '2025-08-25T09:12:00.000Z',
          processedTime: '2025-08-30T10:15:00.000Z',
          identifier: {
            key: 'record001',
            uid: 'uid-001',
            patientId: 'patientA123',
          },
          resourceType: 'Source',
          version: FHIRVersion.FHIR_VERSION_UNSPECIFIED,
        },
        humanReadableStr:
          'Patient John Doe, 45-year-old male, presented with shortness of breath and fatigue. Vital signs stable. ECG showed minor ST elevation. Admitted for observation.',
        aiSummary:
          'Patient admitted due to mild ST elevation and respiratory symptoms.',
      },
    },
    {
      resource: {
        metadata: {
          state: ProcessingState.PROCESSING_STATE_UNSPECIFIED,
          createdTime: '2022-05-15T08:30:00.000Z',
          fetchTime: '2025-08-26T10:20:00.000Z',
          processedTime: '2025-08-30T10:18:00.000Z',
          identifier: {
            key: 'record002',
            uid: 'uid-002',
            patientId: 'patientB456',
          },
          resourceType: 'Source',
          version: FHIRVersion.FHIR_VERSION_UNSPECIFIED,
        },
        humanReadableStr:
          'Initial intake notes for Jane Smith, 32, female. No significant past medical history. Complaint of mild abdominal pain for 2 days. Physical exam unremarkable.',
        aiSummary:
          'Female, 32, with mild abdominal pain. No alarming findings.',
      },
    },
    {
      resource: {
        metadata: {
          state: ProcessingState.PROCESSING_STATE_NOT_STARTED,
          createdTime: '2021-12-10T14:15:00.000Z',
          fetchTime: '2025-08-27T11:45:00.000Z',
          processedTime: '2025-08-30T10:21:00.000Z',
          identifier: {
            key: 'record003',
            uid: 'uid-003',
            patientId: 'patientC789',
          },
          resourceType: 'Source',
          version: FHIRVersion.FHIR_VERSION_UNSPECIFIED,
        },
        humanReadableStr:
          'Medical history: Mark Johnson, 60, type 2 diabetes diagnosed in 2010, hypertension. Last A1C: 7.2%. Medications include metformin and lisinopril. No recent hospitalizations.',
        aiSummary:
          'Patient has controlled diabetes and hypertension, stable condition.',
      },
    },
    {
      resource: {
        metadata: {
          state: ProcessingState.PROCESSING_STATE_COMPLETED,
          createdTime: '2024-03-03T13:00:00.000Z',
          fetchTime: '2025-08-24T08:50:00.000Z',
          processedTime: '2025-08-30T10:25:00.000Z',
          identifier: {
            key: 'record004',
            uid: 'uid-004',
            patientId: 'patientD321',
          },
          resourceType: 'Source',
          version: FHIRVersion.FHIR_VERSION_UNSPECIFIED,
        },
        humanReadableStr:
          'Emergency room report for Alice Brown, 28. Presented after a motor vehicle accident with minor lacerations and bruising. CT scan of head and spine negative. Discharged same day.',
        aiSummary:
          'No major injuries post-MVA. Patient discharged after evaluation.',
      },
    },
    {
      resource: {
        metadata: {
          state: ProcessingState.PROCESSING_STATE_FAILED,
          createdTime: '2020-07-22T17:45:00.000Z',
          fetchTime: '2025-08-23T14:30:00.000Z',
          processedTime: '2025-08-30T10:30:00.000Z',
          identifier: {
            key: 'record005',
            uid: 'uid-005',
            patientId: 'patientE654',
          },
          resourceType: 'Source',
          version: FHIRVersion.FHIR_VERSION_UNSPECIFIED,
        },
        humanReadableStr:
          'Radiology report for CT abdomen and pelvis. Patient: Robert King, 50. Findings: Large hepatic lesion noted, likely hemangioma. Report incomplete due to image corruption.',
        aiSummary:
          'Radiology scan partially failed. Possible hepatic hemangioma observed.',
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

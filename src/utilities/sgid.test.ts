import { describe, expect, it } from 'vitest';
import { etlRow } from "./sgid";

// Mock for row.get
function makeRow(data: Record<string, any>) {
  return {
    get: (key: string) => data[key],
    id: data.id,
  };
}

describe('etlRow', () => {
  it.each([
    [
      'returns null if indexStatus is not live',
      { indexStatus: 'draft', id: 1 },
      null,
    ],
    [
      'returns a StewardshipRecord for live row',
      {
        id: 1,
        displayName: 'Test Layer',
        tableName: 'test.layer',
        category: 'Test Category',
        indexStatus: 'live',
        dataSource: 'source1, source2',
        productType: 'type1',
        description: 'desc',
        inActionUrl: 'http://action',
        productPage: 'http://product',
        itemId: 'abc123',
        hubOrganization: 'org',
        hubName: 'hub',
        serverLayerId: '5',
        serverServiceName: 'svc',
        serverHost: 'host',
        openSGIDtableName: 'open.table',
      },
      expect.objectContaining({
        id: 1,
        displayName: 'Test Layer',
        tableName: 'test.layer',
        category: 'Test Category',
        indexStatus: 'live',
        source: ['source1', 'source2'],
        description: 'desc',
        inActionUrl: 'http://action',
        productPage: 'http://product',
        hub: expect.objectContaining({
          title: 'Test Layer',
          itemId: 'abc123',
          organization: 'org',
          hubName: 'hub',
        }),
        server: expect.objectContaining({
          layerId: 5,
          serviceName: 'svc',
          host: 'host',
        }),
        openSgid: 'open.table',
      }),
    ],
    [
      'removes parentheses from hubName',
      {
        id: 1,
        displayName: 'Test Layer',
        tableName: 'test.layer',
        category: 'Test Category',
        indexStatus: 'live',
        dataSource: 'source1, source2',
        productType: 'type1',
        description: 'desc',
        inActionUrl: 'http://action',
        productPage: 'http://product',
        itemId: 'abc123',
        hubOrganization: 'org',
        hubName: '(hub)',
        serverLayerId: '5',
        serverServiceName: 'svc',
        serverHost: 'host',
        openSGIDtableName: 'open.table',
      },
      expect.objectContaining({
        id: 1,
        displayName: 'Test Layer',
        tableName: 'test.layer',
        category: 'Test Category',
        indexStatus: 'live',
        source: ['source1', 'source2'],
        description: 'desc',
        inActionUrl: 'http://action',
        productPage: 'http://product',
        hub: expect.objectContaining({
          title: 'Test Layer',
          itemId: 'abc123',
          organization: 'org',
          hubName: 'hub',
        }),
        server: expect.objectContaining({
          layerId: 5,
          serviceName: 'svc',
          host: 'host',
        }),
        openSgid: 'open.table',
      }),
    ],
  ])('%s', (_desc, input, expected) => {
    const row = makeRow(input);
    const result = etlRow(row);
    if (expected === null) {
      expect(result).toBeNull();
    } else {
      expect(result).toEqual(expected);
    }
  });
});

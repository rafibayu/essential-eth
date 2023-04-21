import unfetch from 'isomorphic-unfetch';
import { JsonRpcProvider } from '../../../index';
import { mockOf } from '../mock-of';

jest.mock('isomorphic-unfetch');
const mockPostResponse = JSON.stringify({
  jsonrpc: '2.0',
  id: 1,
  result: '0xa',
});
describe('provider.getBlockNumber', () => {
  it('should get number integer', async () => {
    const essentialEthProvider = new JsonRpcProvider();
    mockOf(unfetch).mockReturnValueOnce(
      Promise.resolve({
        text: () => mockPostResponse,
      } as unknown as Response),
    );
    const essentialEthBlockNumber = await essentialEthProvider.getBlockNumber();
    expect(essentialEthBlockNumber).toBe(10);
  });
});

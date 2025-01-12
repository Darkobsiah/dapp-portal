import { Provider } from "zksync-web3";

import { useNetworkStore } from "@/store/network";

export const useZkSyncProviderStore = defineStore("zkSyncProvider", () => {
  const { selectedNetwork } = storeToRefs(useNetworkStore());
  let provider: Provider | undefined;

  const requestProvider = () => {
    if (!provider) {
      provider = new Provider(selectedNetwork.value.rpcUrl);
    }
    return provider;
  };

  return {
    eraNetwork: selectedNetwork,

    requestProvider,

    blockExplorerUrl: computed(() => selectedNetwork.value.blockExplorerUrl),
  };
});

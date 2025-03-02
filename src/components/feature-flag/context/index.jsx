import { createContext, useState } from "react";
import featureFlasDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  async function fetchFeatureFlags() {
    const response = await featureFlasDataServiceCall();
    setEnabledFlags(response);

    try {
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
  return (
    <FeatureFlagsContext.Provider value={{ enabledFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}

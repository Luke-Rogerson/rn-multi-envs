package com.rnbuildvariants;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

import java.util.HashMap;
import java.util.Map;

public class RNConfigModule extends ReactContextBaseJavaModule {

    String apiUrl;

    RNConfigModule(ReactApplicationContext context) {
        super(context);
        apiUrl = context.getResources().getString(R.string.API_URL);
    }

    @Override
    public String getName() {
        return "RNConfig";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("ENV", BuildConfig.FLAVOR);
        constants.put("API_URL", apiUrl);
        return constants;
    }
}
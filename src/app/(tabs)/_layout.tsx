import React from "react";
import { Tabs } from "expo-router";
import { NativeTabs, Icon, Label } from "expo-router/unstable-native-tabs";

export default function TabLayout() {
  return (
    // @ts-ignore - unstable API
    <NativeTabs
      blurEffect="systemMaterialDark"
      tintColor="#007AFF"
      iconColor={{
        default: "#9BA8AB",
        selected: "#007AFF",
      }}
    >
      {/* @ts-ignore - unstable API */}
      <NativeTabs.Trigger name="index">
        <Label>Tab 1</Label>
        <Icon sf={"house"} />
      </NativeTabs.Trigger>

      {/* @ts-ignore - unstable API */}
      <NativeTabs.Trigger name="tab2">
        <Label>Tab 2</Label>
        <Icon sf={"app"} />
      </NativeTabs.Trigger>

      {/* @ts-ignore - unstable API */}
      <NativeTabs.Trigger name="tab3">
        <Label>Tab 3</Label>
        <Icon sf={"square.3.layers.3d"} />
      </NativeTabs.Trigger>

      {/* @ts-ignore - unstable API */}
      <NativeTabs.Trigger name="tab4">
        <Label>Tab 4</Label>
        <Icon sf={"person.fill"} />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

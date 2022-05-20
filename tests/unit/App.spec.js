import { shallowMount, mount } from "@vue/test-utils";
import App from "@/App.vue";
import NavigationApp from "@/components/navigation/navigation.vue";

describe("Test App", () => {
  const wrapper = shallowMount(App);

  test("exist navigation component", () => {
    expect(wrapper.findComponent(NavigationApp).exists()).toBe(true);
  });

  test("Exist component router-view", () => {
    const wrapper = mount(App);
    expect(wrapper.html()).toContain("<router-view");
  });
});

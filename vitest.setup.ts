import { vi } from "vitest";
import { config } from "@vue/test-utils";
import ResizeObserver from "resize-observer-polyfill";

vi.stubGlobal("ResizeObserver", ResizeObserver);

config.global.stubs = {};

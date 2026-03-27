import { GrowthBook } from "@growthbook/growthbook";

const growthbook = new GrowthBook({
  apiHost: "https://cdn.growthbook.io",
  clientKey: "sdk-QJuFQ7KrCeHOIzJ", // Key của bạn
  enableDevMode: true,
  // 1. Bỏ plugins: [ autoAttributesPlugin() ] vì Node.js không hỗ trợ
  
  // 2. Tự định nghĩa attributes (Ví dụ: id người dùng để test)
  attributes: {
    id: "user-123",
    company: "HUST",
    loggedIn: true,
    role : "user"
  },
  
  trackingCallback: (experiment, result) => {
    console.log("Viewed Experiment", {
      experimentId: experiment.key,
      variationId: result.key
    });
  },
});

// 3. Đợi dữ liệu tải về. Dùng streaming: true để nhận update ngay khi gạt nút
await growthbook.init({ streaming: true });

console.log("--- KẾT NỐI THÀNH CÔNG ---");

// Test thử xem cờ có ON không
setInterval(() => {
    if (growthbook.isOn("feature-1")) {
        console.log("✅ CỜ ĐANG: ON");
    } else {
        console.log("❌ CỜ ĐANG: OFF");
    }
}, 3000);
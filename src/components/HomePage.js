import React from 'react';

const reminders = [
  "Hôm nay bạn có bài học từ mới",
  "Bạn có kiểm tra vào ngày mai"
];

const features = [
  {
    title: "Từ vựng",
    description: "Chức năng này cung cấp các bài học từ vựng theo từng cấp độ.",
    icon: "📚",
  },
  {
    title: "Ngữ pháp",
    description: "Chức năng này giúp bạn nắm vững ngữ pháp tiếng Anh.",
    icon: "📖",
  },
  {
    title: "Luyện nghe",
    description: "Cung cấp các bài học và bài thực hành nghe.",
    icon: "🎧",
  },
  {
    title: "Luyện phát âm",
    description: "Cung cấp các bài học và bài thực hành phát âm.",
    icon: "🗣️",
  },
];

const HomePage = () => {
  return (
    <div>
      <h2>Nhắc nhở hôm nay</h2>
      <ul>
        {reminders.map((reminder, index) => (
          <li key={index}>{reminder}</li>
        ))}
      </ul>
      <h2>Chức năng</h2>
      <div className="features">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <span>{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

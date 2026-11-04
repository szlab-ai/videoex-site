export type Lang = 'en' | 'zh';

export const copy = {
  en: {
    title: 'videoEx — Video speed and picture controls for Safari',
    description: 'Watch web video in Safari at your own pace. Control playback, picture, shortcuts, and site preferences on iPhone, iPad, and Mac.',
    nav: { features: 'Features', privacy: 'Privacy', support: 'Support' },
    hero: {
      eyebrow: 'A Safari extension for web video',
      headline: 'Watch web video in Safari at your own pace.',
      intro: 'Fine-tune the moment, the picture, and the way you control it — on iPhone, iPad, and Mac.',
      coming: 'Coming soon to the App Store',
      purchase: 'US$0.99 once · No subscription, in-app purchases, or ads',
      platforms: 'iOS / iPadOS 17+ · macOS 14+ · One purchase for all three',
      scope: 'Works with most web videos in Safari.',
    },
    overview: 'More control, exactly where you watch.',
    features: [
      {
        number: '01', title: 'Set your pace', kicker: 'Playback',
        body: 'Change speed; jump forward or back in short or long steps; control volume and mute. Replay the last 10 seconds, loop an A–B section, or switch to Picture in Picture and full screen.',
        image: 'feature-1-pace', alt: 'videoEx playback controls in Safari',
      },
      {
        number: '02', title: 'Make the picture yours', kicker: 'Picture',
        body: 'Rotate or flip the video, zoom and pan, and adjust brightness, contrast, saturation, hue, and blur. One tap restores the original picture.',
        image: 'feature-2-picture', alt: 'videoEx picture adjustment controls',
      },
      {
        number: '03', title: 'Control without breaking focus', kicker: 'Efficiency',
        body: 'Assign keyboard shortcuts to all 43 actions. They stay out of the way while you type in a web page. Drag the floating button to where it belongs, and save speed and mute preferences for each site.',
        image: 'feature-3-efficiency', alt: 'videoEx keyboard shortcut and site controls',
      },
      {
        number: '04', title: 'Your settings stay yours', kicker: 'Privacy',
        body: 'No account and no data collection. Your settings live only on your device, shared locally between the app and Safari extension.',
        image: 'feature-4-trust', alt: 'videoEx local privacy settings',
      },
    ],
    closing: 'Your Safari videos. Your rhythm.',
    faqLink: 'Get help with videoEx',
    privacyLink: 'Read the privacy policy',
    footer: 'videoEx for Safari',
    imagePending: 'Product screenshot coming soon',
  },
  zh: {
    title: 'videoEx — Safari 网页视频倍速与画面控制',
    description: 'Safari 里的网页视频，按你的节奏看。在 iPhone、iPad 和 Mac 上调整播放、画面、快捷键和网站偏好。',
    nav: { features: '功能', privacy: '隐私政策', support: '技术支持' },
    hero: {
      eyebrow: 'Safari 网页视频扩展',
      headline: 'Safari 里的网页视频，按你的节奏看。',
      intro: '节奏、画面、操作方式，都可以由你决定。适用于 iPhone、iPad 和 Mac。',
      coming: '即将登陆 App Store',
      purchase: 'US$0.99 一次性购买 · 无订阅、无内购、无广告',
      platforms: 'iOS / iPadOS 17+ · macOS 14+ · 一次购买三端通用',
      scope: '适用于 Safari 中的大多数网页视频。',
    },
    overview: '看视频的方式，可以更合你的心意。',
    features: [
      {
        number: '01', title: '掌握节奏', kicker: '播放',
        body: '调整倍速，短跳或长跳快进快退，控制音量与静音。重听最近 10 秒、设置 A–B 区间循环，也可切换画中画和全屏。',
        image: 'feature-1-pace', alt: 'Safari 中的 videoEx 播放控制',
      },
      {
        number: '02', title: '画面随你调整', kicker: '画面',
        body: '旋转、水平或垂直翻转视频，放大缩小并平移画面；还能调整亮度、对比度、饱和度、色相和模糊，一键还原。',
        image: 'feature-2-picture', alt: 'videoEx 画面调整控制',
      },
      {
        number: '03', title: '顺手，不打断', kicker: '效率',
        body: '43 个操作都能设置键盘快捷键；在网页输入框打字时不会触发。视频上的浮层按钮可以拖动，还能按网站保存倍速和是否静音。',
        image: 'feature-3-efficiency', alt: 'videoEx 键盘快捷键和网站设置',
      },
      {
        number: '04', title: '设置只属于你', kicker: '隐私',
        body: '无需账号，不收集数据。设置只保存在你的设备本地，由 App 和 Safari 扩展在本机共享。',
        image: 'feature-4-trust', alt: 'videoEx 本地隐私设置',
      },
    ],
    closing: '你的 Safari 视频，你的节奏。',
    faqLink: '获取 videoEx 帮助',
    privacyLink: '阅读隐私政策',
    footer: 'Safari 视频控制工具 videoEx',
    imagePending: '产品截图即将提供',
  },
} as const;

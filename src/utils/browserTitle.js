export default function(title) {
  document.title = `Fans | ${title}`;

  if (window.mqq) {
    window.mqq.invoke('ui', 'refreshTitle');
  }
};

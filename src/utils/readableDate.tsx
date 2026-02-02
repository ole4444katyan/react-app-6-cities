const readableDate = (date:string) => (new Date(String(date)).toLocaleString('en-US', {
  month: 'long',
  year: 'numeric',
}));
export default readableDate;

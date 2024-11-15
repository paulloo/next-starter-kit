'use client';

export default function QuoteAsk() {
  async function handleClick() {
    let response: Response;

    // scroll to the bottom
    window.scrollTo(0, document.body.scrollHeight);
  }

  return (
    <button type="button" style={{ marginLeft: '20px' }} onClick={handleClick}>
      Get a Quote
    </button>
  );
}

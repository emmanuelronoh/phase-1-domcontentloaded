require('./helpers.js');

describe("index.js", () => {
  it('should change the text on the page when DOM content has loaded', function () {
    // Initial expectation before DOMContentLoaded event
    expect(document.querySelector('p').textContent).to.equal("JavaScript is so cool. It lets me add text to my page programmatically.");

    // Create and dispatch the DOMContentLoaded event
    const event = new Event('DOMContentLoaded');
    document.dispatchEvent(event);

    // Expectation after DOMContentLoaded event
    expect(document.querySelector('p').textContent).to.equal("This is really cool!");
  });
});

const form = document.getElementById('summarize-form');
const urlInput = document.getElementById('url-input');
const loadingDiv = document.getElementById('loading');
const resultDiv = document.getElementById('result');
const summaryText = document.getElementById('summary-text');
const errorDiv = document.getElementById('error');
const errorText = document.getElementById('error-text');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const url = urlInput.value.trim();

    if (!url) return;

    
    loadingDiv.classList.remove('hidden');
    resultDiv.classList.add('hidden');
    errorDiv.classList.add('hidden');

    try {
        const response = await fetch('/summarize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Something went wrong');
        }

        const data = await response.json();
        summaryText.innerText = data.summary;
        resultDiv.classList.remove('hidden');

    } catch (err) {
        errorText.innerText = err.message;
        errorDiv.classList.remove('hidden');
    } finally {
        
        loadingDiv.classList.add('hidden');
    }
});
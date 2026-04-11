/**
 * MAGNAPACK CALCULATOR LOGIC
 * Domain: E-commerce / Industrial Supplies
 * Focus: TikTok Shop Mexico Fiscal Regulations
 */

function calculateProfit() {
    // 1. Data Acquisition
    const unitCost = parseFloat(document.getElementById('materialCost').value);
    const salePrice = parseFloat(document.getElementById('salePrice').value);
    const shipping = parseFloat(document.getElementById('shippingCost').value) || 0;

    // 2. Platform & Fiscal Constants (Mexico PFAE settings)
    const TIKTOK_FEE_PERCENT = 0.05;      // 5% Platform Commission
    const VAT_RETENTION_PERCENT = 0.08;   // 8% VAT Retention (Platform Law)
    const ISR_RETENTION_PERCENT = 0.01;   // 1% ISR Retention (Income Tax)

    // 3. Validation
    if (isNaN(unitCost) || isNaN(salePrice)) {
        alert("Please enter valid numeric values.");
        return;
    }

    // 4. Financial Calculations
    const platformFee = salePrice * TIKTOK_FEE_PERCENT;
    const vatTax = salePrice * VAT_RETENTION_PERCENT;
    const isrTax = salePrice * ISR_RETENTION_PERCENT;
    
    const totalDeductions = platformFee + vatTax + isrTax + shipping;
    const netProfit = salePrice - unitCost - totalDeductions;
    const margin = (netProfit / salePrice) * 100;

    // 5. Result Rendering
    const resultDiv = document.getElementById('result');
    
    // UI logic: Change color based on profit performance
    const statusColor = netProfit > 0 ? '#28a745' : '#d62828';

    resultDiv.innerHTML = `
        <div class="summary-container" style="margin-top: 25px; text-align: left; border-top: 2px solid #eee; padding-top: 20px;">
            <h3 style="font-size: 14px; color: #888; text-transform: uppercase;">Analysis Result</h3>
            
            <div style="margin: 15px 0;">
                <p style="font-size: 24px; font-weight: 900; color: ${statusColor};">
                    NET PROFIT: $${netProfit.toFixed(2)}
                </p>
                <p style="font-size: 16px; font-weight: bold; color: #555;">
                    MARGIN: ${margin.toFixed(2)}%
                </p>
            </div>

            <div style="font-size: 12px; color: #777; line-height: 1.6;">
                <p>• TikTok Fee: -$${platformFee.toFixed(2)}</p>
                <p>• Taxes (VAT/ISR): -$${(vatTax + isrTax).toFixed(2)}</p>
                <p>• Logistics: -$${shipping.toFixed(2)}</p>
            </div>
        </div>
    `;
}
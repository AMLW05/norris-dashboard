/**
 * Pricing Data Loader for AI Tools Comparison Guide
 * Loads pricing information from pricing-data.json
 * Can be integrated into comparison-guide.html for dynamic updates
 */

class PricingLoader {
    constructor(jsonPath = './data/pricing-data.json') {
        this.jsonPath = jsonPath;
        this.data = null;
    }

    /**
     * Load pricing data from JSON file
     */
    async load() {
        try {
            const response = await fetch(this.jsonPath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.data = await response.json();
            return this.data;
        } catch (error) {
            console.error('Error loading pricing data:', error);
            return null;
        }
    }

    /**
     * Get pricing for a specific tool
     */
    getToolPricing(toolName) {
        if (!this.data) {
            console.error('Data not loaded. Call load() first.');
            return null;
        }
        return this.data.tools[toolName.toLowerCase()] || null;
    }

    /**
     * Calculate total cost for professional tier
     */
    getProfessionalCost() {
        if (!this.data) return null;
        return this.data.professional_cost;
    }

    /**
     * Calculate student savings
     */
    getStudentSavings() {
        if (!this.data) return null;
        return this.data.student_savings;
    }

    /**
     * Format pricing for display
     */
    formatToolPrice(toolName) {
        const tool = this.getToolPricing(toolName);
        if (!tool) return 'N/A';

        let priceInfo = '';

        if (toolName.toLowerCase() === 'copilot') {
            priceInfo = `FREE for students (regular: $${tool.regular_price}/mo)`;
        } else if (tool.free_tier) {
            priceInfo = `FREE tier (${tool.free_model}) | Pro: $${tool.plus_price || tool.pro_price}/mo`;
        }

        return priceInfo;
    }

    /**
     * Get last updated date
     */
    getLastUpdated() {
        if (!this.data) return null;
        return this.data.last_updated;
    }

    /**
     * Update pricing display in the DOM
     * Call this after loading data to dynamically update pricing info
     */
    updatePricingDisplay() {
        if (!this.data) {
            console.error('Data not loaded. Call load() first.');
            return;
        }

        // Update last updated date if element exists
        const lastUpdatedEl = document.getElementById('pricing-last-updated');
        if (lastUpdatedEl) {
            lastUpdatedEl.textContent = `Pricing last updated: ${this.getLastUpdated()}`;
        }

        // Update individual tool pricing
        const tools = ['copilot', 'chatgpt', 'claude', 'gemini'];
        tools.forEach(tool => {
            const el = document.getElementById(`${tool}-price`);
            if (el) {
                el.textContent = this.formatToolPrice(tool);
            }
        });

        // Update total costs
        const profCost = this.getProfessionalCost();
        if (profCost) {
            const monthlyEl = document.getElementById('professional-monthly-cost');
            const annualEl = document.getElementById('professional-annual-cost');
            if (monthlyEl) monthlyEl.textContent = `$${profCost.monthly}/mo`;
            if (annualEl) annualEl.textContent = `$${profCost.annual}/yr`;
        }

        const savings = this.getStudentSavings();
        if (savings) {
            const savingsMonthlyEl = document.getElementById('student-savings-monthly');
            const savingsAnnualEl = document.getElementById('student-savings-annual');
            if (savingsMonthlyEl) savingsMonthlyEl.textContent = `$${savings.monthly}/mo`;
            if (savingsAnnualEl) savingsAnnualEl.textContent = `$${savings.annual}/yr`;
        }
    }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PricingLoader;
}

// Usage example:
// const loader = new PricingLoader();
// loader.load().then(() => {
//     loader.updatePricingDisplay();
// });

# E-Commerce Analytics Platform

A comprehensive data warehouse and business intelligence dashboard for e-commerce analytics, built with modern data engineering tools and best practices.

## 🎯 Overview

This platform provides end-to-end data warehousing and analytics capabilities for e-commerce businesses, featuring real-time pipeline monitoring, data quality validation, and interactive visualizations. Built with Snowflake, dbt, Great Expectations, and a Next.js dashboard interface.

## ✨ Features

### 📊 Analytics & Visualization
- **Overview Dashboard**: Key performance indicators including revenue, conversion rate, average order value, and query performance metrics
- **Conversion Funnel Analysis**: Track user journey from sessions to purchase with drop-off insights
- **Cohort Analysis**: Understand customer retention and lifetime value patterns
- **Star Schema Viewer**: Visual representation of the data warehouse schema with fact and dimension tables

### 🔧 Data Pipeline & Quality
- **Pipeline Status Monitoring**: Real-time tracking of ETL/ELT processes
  - Data ingestion via Snowpipe
  - dbt staging, intermediate, and mart model execution
  - Great Expectations validation runs
  - Looker dashboard refresh status
- **Data Quality Panel**: Comprehensive data quality metrics
  - Schema validation
  - Referential integrity checks
  - Null value detection
  - Duplication tests
  - 156+ automated data quality tests with 97% coverage

### 📁 Data Warehouse Schema
- **Fact Tables**:
  - `fact_orders`: 1.2M rows tracking order transactions
  - `fact_sessions`: 3.4M rows capturing user session data
- **Dimension Tables**:
  - `dim_customers`: 450K customer profiles with segmentation
  - `dim_products`: Product catalog with categories and pricing
  - `dim_dates`: Time dimension for temporal analysis

## 🛠️ Tech Stack

### Frontend
- **Next.js 16**: React framework with App Router
- **React 19**: Latest React with server components
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **shadcn/ui**: High-quality UI component library
- **Recharts**: Interactive data visualizations
- **Lucide React**: Modern icon library

### Data & Analytics
- **Snowflake**: Cloud data warehouse
- **dbt (data build tool)**: SQL-based transformation framework
  - 47 models (staging, intermediate, mart layers)
  - Comprehensive testing and documentation
- **Great Expectations**: Data quality validation
  - 156 automated tests across multiple expectation suites
- **Looker**: Business intelligence and reporting

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and pnpm
- Access to Snowflake data warehouse (for production data)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/johaankjis/Data-Warehouse---Analytics-Platform-for-E-Commerce.git
cd Data-Warehouse---Analytics-Platform-for-E-Commerce
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `pnpm dev`: Start the development server
- `pnpm build`: Build the application for production
- `pnpm start`: Start the production server
- `pnpm lint`: Run ESLint to check code quality

## 📊 Dashboard Features

### 1. Overview Tab
View key metrics at a glance:
- Total Revenue: $2.4M (+8.2%)
- Conversion Rate: 3.8% (+0.4%)
- Average Order Value: $127
- Query Runtime Performance: 3.2s (40% improvement)

### 2. Pipeline Tab
Monitor your data pipeline health:
- Real-time status of each pipeline stage
- Execution duration tracking
- Last run timestamps
- Detailed logs for debugging

### 3. Data Quality Tab
Ensure data integrity:
- Schema validation results
- Referential integrity checks
- Null value analysis
- Duplicate detection
- Great Expectations suite results

### 4. Conversion Tab
Analyze user behavior:
- Multi-stage conversion funnel
- Drop-off analysis between stages
- Actionable insights for optimization

### 5. Cohorts Tab
Understand customer retention:
- Cohort-based retention analysis
- Lifetime value tracking
- Customer segmentation insights

### 6. Schema Tab
Explore data warehouse structure:
- Interactive schema visualization
- Fact and dimension table details
- Column definitions and data types
- Primary and foreign key relationships

## 🏗️ Architecture

The platform follows a modern data stack architecture:

```
Source Systems → Snowpipe → Snowflake Raw Layer
                                ↓
                          dbt Transformations
                          (Staging → Intermediate → Mart)
                                ↓
                          Great Expectations
                          (Data Quality Validation)
                                ↓
                          BI Layer (Looker + Custom Dashboard)
```

### Data Flow
1. **Ingestion**: Snowpipe continuously loads data from transactional systems
2. **Transformation**: dbt models transform raw data through multiple layers
3. **Validation**: Great Expectations ensures data quality at each stage
4. **Visualization**: Next.js dashboard and Looker provide insights

## 📦 Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main dashboard page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── overview-dashboard.tsx    # KPI metrics
│   ├── pipeline-status.tsx       # Pipeline monitoring
│   ├── data-quality-panel.tsx    # Data quality metrics
│   ├── conversion-funnel.tsx     # Funnel analysis
│   ├── cohort-analysis.tsx       # Cohort retention
│   ├── star-schema-viewer.tsx    # Schema visualization
│   └── ui/               # shadcn/ui components
├── lib/                   # Utility functions
├── public/                # Static assets
└── styles/                # Additional styles
```

## 🔒 Data Quality

The platform implements comprehensive data quality monitoring:

- **156 automated tests** across all critical tables
- **97% test coverage** for production data
- **Real-time validation** with Great Expectations
- **Automated alerts** for data quality issues

### Quality Metrics Tracked
- Schema conformance
- Referential integrity
- Null value detection
- Duplicate records
- Data freshness
- Distribution anomalies

## 🎨 UI Components

Built with shadcn/ui, including:
- Responsive cards and layouts
- Interactive charts and graphs
- Data tables with sorting and filtering
- Tabs for organized navigation
- Badges and status indicators
- Tooltips and popovers
- Progress bars and loaders

## 🚦 Environment

The dashboard supports multiple environments:
- **Development**: Local development with mock data
- **Staging**: Pre-production testing
- **Production**: Live data warehouse connection

Current environment is displayed in the header for easy identification.

## 📈 Performance

- **Fast page loads** with Next.js optimization
- **Server-side rendering** for initial content
- **Client-side hydration** for interactivity
- **Code splitting** for optimal bundle size
- **Optimized queries** with sub-3-second runtime

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Charts powered by [Recharts](https://recharts.org/)
- Data warehouse on [Snowflake](https://www.snowflake.com/)
- Transformations with [dbt](https://www.getdbt.com/)
- Quality validation by [Great Expectations](https://greatexpectations.io/)

---

Built with ❤️ for modern data teams

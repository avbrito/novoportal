import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "verde-unimed": "#00995C",
        "verde-claro": "#B2D14B",
        "verde-escuro": "#004D49",
        "verde-sucesso": "#009262",
        "blue-black": "#101828",
        "blue-link": "#06F",
        "blue-medium": "#475467",
        "blue-lightest": "#F2F4F7",
        "gray-unimed": "#ECF1F9",
        "blue-dark": "#344054",
        "blue-regular": "#98A2B3",
        "gray-fundo": "#f2f2f2",
        "gray-fundo-claro": "#F9FAFB",
        "gray-icon": "#E6ECF5",
        "gray-card": "#FCFCFD",
        "gray-borda": "#DBD9D9",
        "red-erro": "#E01507",
        "orange-unimed": "#F47920",
        "verde-background": "#EDFFF7",
        "verde-dark": "#001F15",
        "cinza-dark": "#1F2937",
        "orange-warning": "#FFFAEB",
        "orange-warning-700":"#B54708",
        "orange-status-analise": "#B54708",
        
      },
      fontFamily: {
        sans: ['UnimedSans2020', 'Arial', 'Helvetica', 'sans-serif'],
        sansBold: ['UnimedSansBd2020', 'Arial', 'Helvetica', 'sans-serif'],
        sansSlab: ['UnimedSlab2020', 'Arial', 'Helvetica', 'sans-serif'],
      },
      fontSize: {
        "12px": "12px",  
        "16px": "16px",  
        "20px": "20px",  
        "32px": "32px",  
        "48px": "48px", 
        "68px": "68px",  
      },
      fontWeight: {
        light: "300",   
        normal: "400",
        medium: "600",  
        bold: "700",    
        "extra-bold": "800",
        "ultra-bold": "900",
          
      },
      fontStyle: {
        normal: "normal", 
        italic: "italic",  
      },

      spacing: {
        '90': '22.5rem',
        '13': '53px',
      },
      
    },
  },
  plugins: [
    require('flowbite/plugin')
]
} satisfies Config;

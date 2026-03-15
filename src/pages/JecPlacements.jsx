import { useEffect, useMemo, useState } from 'react';

const placementsByCollege = [
  {
    college: 'Jorhat Engineering College',
    rows: [
      {
        name: 'ABHINANDAN BHARALI',
        branch: 'CE',
        year: '2022',
        company: 'FAR INFRASTRUCTURE PVT. LTD, GUWAHATI ASSAM',
      },
      {
        name: 'ABHINAV PARASAR',
        branch: 'CE',
        year: '2022',
        company: 'SPAGEO',
      },
      {
        name: 'BHABANA DEKA',
        branch: 'CE',
        year: '2022',
        company: 'COGNIZANT',
      },
      {
        name: 'BHABNA GOGOI',
        branch: 'CE',
        year: '2022',
        company: 'COGNIZANT',
      },
      {
        name: 'DEBASHISH TALUKDAR',
        branch: 'CE',
        year: '2022',
        company: 'OIL INDIA LIMITED',
      },
      {
        name: 'JORSING KRO',
        branch: 'CE',
        year: '2022',
        company: 'M/S SONTOSH SAHEWALLA, BUILDERS & ENGINEERS',
      },
      {
        name: 'KRISTINA CHETIA',
        branch: 'CE',
        year: '2022',
        company: 'M/S SONTOSH SAHEWALLA BUILDERS & ENGINEERS',
      },
      {
        name: 'LAWRENCE DOIMARY',
        branch: 'CE',
        year: '2022',
        company: 'ITC INFOTECH INDIA LTD.',
      },
      {
        name: 'MANASH PRATIM KALITA',
        branch: 'CE',
        year: '2022',
        company: 'KEC INTERNATIONAL LTD.',
      },
      {
        name: 'NABA KASHYAP MUDOI',
        branch: 'CE',
        year: '2022',
        company: 'FAR INFRASTRUCTURE PVT. LTD, GUWAHATI ASSAM',
      },
      {
        name: 'NABIHA SABRIN',
        branch: 'CE',
        year: '2022',
        company: 'KEC INTERNATIONAL LTD.',
      },
      {
        name: 'NANI HORCHI',
        branch: 'CE',
        year: '2022',
        company: 'SPAGEO',
      },
      {
        name: 'NIPJYOTI BARUAH',
        branch: 'CE',
        year: '2022',
        company: 'KEC INTERNATIONAL LTD.',
      },
      {
        name: 'PRONAMI SARMA',
        branch: 'CE',
        year: '2022',
        company: 'ITC INFOTECH INDIA LTD.',
      },
      {
        name: 'RISHITA GOPE',
        branch: 'CE',
        year: '2022',
        company: 'BYJU\'S',
      },
      {
        name: 'SADIQUE MOHAMMAD',
        branch: 'CE',
        year: '2022',
        company: 'ICICI BANK',
      },
      {
        name: 'SANDIPAN MAHANTA',
        branch: 'CE',
        year: '2022',
        company: 'WIPRO',
      },
      {
        name: 'SEEMANTA SHOME',
        branch: 'CE',
        year: '2022',
        company: 'BYJU\'S',
      },
      {
        name: 'SHREYA SIMANTA SARMA',
        branch: 'CE',
        year: '2022',
        company: 'BYJU\'S',
      },
      {
        name: 'SUHAIL ALAM',
        branch: 'CE',
        year: '2022',
        company: 'COGNIZANT',
      },
      {
        name: 'TANZEELA RAHMAN',
        branch: 'CE',
        year: '2022',
        company: 'FAR INFRASTRUCTURE PVT. LTD, GUWAHATI ASSAM',
      },
      {
        name: 'UPAMANYU SANDILYA',
        branch: 'CE',
        year: '2022',
        company: 'TATA CONSULTANCY SERVICES LIMITED (TCSL)',
      },
      {
        name: 'KRITARTHA KASHYAP',
        branch: 'CE',
        year: '2022',
        company: 'SPAGEO',
      },
      {
        name: 'LAKSHMISHREE SAIKIA',
        branch: 'CE',
        year: '2022',
        company: 'M/S SONTOSH SAHEWALLA, BUILDERS & ENGINEERS',
      },
      {
        name: 'DEBANANDA DEORI',
        branch: 'CE',
        year: '2022',
        company: 'PUBLIC HEALTH ENGG DEPARTMENT, GOVT. OF ASSAM',
      },
      {
        name: 'GAUTAM SAHU',
        branch: 'CE',
        year: '2022',
        company: 'IRRIGATION ENGINEERING DEPARTMENT, GOVT. OF ASSAM',
      },
      {
        name: 'RISHIRAJ SHANDILYA',
        branch: 'CE',
        year: '2022',
        company: 'PUBLIC HEALTH ENGG DEPARTMENT, GOVT. OF ASSAM',
      },
      {
        name: 'SANJIT DAS',
        branch: 'CE',
        year: '2022',
        company: 'IRRIGATION ENGINEERING DEPARTMENT, GOVT. OF ASSAM',
      },
      {
        name: 'SWARNABH MAHANTA',
        branch: 'CE',
        year: '2022',
        company: 'PUBLIC HEALTH ENGG DEPARTMENT, GOVT. OF ASSAM',
      },
      {
        name: 'ABHISHEK GOSWAMI',
        branch: 'CE',
        year: '2021',
        company: 'SMEC, INDIA',
      },
      {
        name: 'ANAMIKA RAJBANSHI',
        branch: 'CE',
        year: '2021',
        company: 'FAR INFRASTRUCTURE PVT. LTD, GUWAHATI ASSAM',
      },
      {
        name: 'ANUPAM KUMAR DAS',
        branch: 'CE',
        year: '2021',
        company: 'ASSAM AIR PRODUCTS',
      },
      {
        name: 'ARUNAVA PHUKAN',
        branch: 'CE',
        year: '2021',
        company: 'INDRADHANUSH GAS GRID LTD.',
      },
      {
        name: 'BIKASH PRATIM BORAH',
        branch: 'CE',
        year: '2021',
        company: 'NRL, ASSAM',
      },
      {
        name: 'BISHAL MISHRA',
        branch: 'CE',
        year: '2021',
        company: 'PASHUPATI TECHNO DREAMS',
      },
      {
        name: 'HIMANTA BARKAKOTY',
        branch: 'CE',
        year: '2021',
        company: 'CIVIQ INFRATECH',
      },
      {
        name: 'KANYAJYOTI CHETIA',
        branch: 'CE',
        year: '2021',
        company: 'KEC INTERNATIONAL',
      },
      {
        name: 'KRISHAN BORAH',
        branch: 'CE',
        year: '2021',
        company: 'CIVIQ INFRATECH',
      },
      {
        name: 'NIKUNJA DAS',
        branch: 'CE',
        year: '2021',
        company: 'C.E. TESTING COMPANY PVT. LTD.',
      },
      {
        name: 'RUHUL AMIN LASKAR',
        branch: 'CE',
        year: '2021',
        company: 'SPAGEO',
      },
      {
        name: 'PRADYUMNA KALITA',
        branch: 'CE',
        year: '2021',
        company: 'SPAGEO',
      },
      {
        name: 'SAAGAR HAOBAM',
        branch: 'CE',
        year: '2021',
        company: 'VEDANTA, BHARAT ALUMINUM COMPANY LTD.',
      },
      {
        name: 'SHREYA TAMULI',
        branch: 'CE',
        year: '2021',
        company: 'VEDANTA, BHARAT ALUMINUM COMPANY LTD.',
      },
      {
        name: 'SUNNY HAZARIKA',
        branch: 'CE',
        year: '2021',
        company: 'INDRADHANUSH GAS GRID LTD.',
      },
      {
        name: 'SYED IKBAL HUSHIN',
        branch: 'CE',
        year: '2021',
        company: 'VEDANTA, BHARAT ALUMINUM COMPANY LTD.',
      },
      {
        name: 'TAPAN JYOTI DEVNATH',
        branch: 'CE',
        year: '2021',
        company: 'FAR INFRASTRUCTURE PVT. LTD, GUWAHATI ASSAM',
      },
      {
        name: 'TITIKSHA HANDIQUE',
        branch: 'CE',
        year: '2021',
        company: 'VEDANTA, BHARAT ALUMINUM COMPANY LTD.',
      },
      {
        name: 'UME HONEY BARBHUIYA',
        branch: 'CE',
        year: '2021',
        company: 'FAR INFRASTRUCTURE PVT. LTD, GUWAHATI ASSAM',
      },
      {
        name: 'VIVEK KALITA',
        branch: 'CE',
        year: '2021',
        company: 'BHARTIA INFRA PROJECTS LTD. ENGINEERS AND CONTRACTORS',
      },
      {
        name: 'SHIVANI NATH',
        branch: 'CE',
        year: '2021',
        company: 'BYJU�S',
      },
      {
        name: 'ARINDRAM HANDIQUE',
        branch: 'CE',
        year: '2021',
        company: 'WATER RESOURCE DEPT., GOVT. OF INDIA',
      },
      {
        name: 'BITUPON DUTTA',
        branch: 'CE',
        year: '2021',
        company: 'PUBLIC HEALTH ENGG DEPARTMENT, GOVT. OF ASSAM',
      },
      {
        name: 'CHIRANJEET GOSWAMI',
        branch: 'CE',
        year: '2021',
        company: 'PUBLIC HEALTH ENGG DEPARTMENT, GOVT. OF ASSAM',
      },
      {
        name: 'JINKUKEOT',
        branch: 'CE',
        year: '2021',
        company: 'PUBLIC HEALTH ENGG DEPARTMENT, GOVT. OF ASSAM',
      },
      {
        name: 'MUKSITUR RAHMAN AHMED',
        branch: 'CE',
        year: '2021',
        company: 'M/S PRADYUT MAHANTA, ELECTRICAL MECHANICAL AND CIVIL CONTRACTOR',
      },
      {
        name: 'PARTHA PRATIM BARUAH',
        branch: 'CE',
        year: '2021',
        company: 'PUBLIC HEALTH ENGG DEPARTMENT, GOVT. OF ASSAM',
      },
      {
        name: 'SYEDA TAJKIYA PARBIN',
        branch: 'CE',
        year: '2021',
        company: 'PUBLIC HEALTH ENGG DEPARTMENT, GOVT. OF ASSAM',
      },
      {
        name: 'AKTAR HUSSAIN',
        branch: 'CE',
        year: '2020',
        company: 'CENTRAL WATER COMMISSION',
      },
      {
        name: 'NARZIA SULTANA AHMED',
        branch: 'CE',
        year: '2020',
        company: 'JAL JEEVAN MISSION, ASSAM',
      },
      {
        name: 'HUSSAIN MUHAMMAD UBAIDULLAH',
        branch: 'CE',
        year: '2020',
        company: 'CIVIL ENGINEERING CONTRACTOR',
      },
      {
        name: 'SANYUKTA BORAH',
        branch: 'CE',
        year: '2020',
        company: 'PUBLIC HEALTH ENGG DEPARTMENT, GOVT. OF ASSAM',
      },
      {
        name: 'NISHANT PARASAR',
        branch: 'CE',
        year: '2020',
        company: 'AMAZON DEVELOPMENT CENTER INDIA',
      },
      {
        name: 'ASHIQUE AKHTAR',
        branch: 'CE',
        year: '2020',
        company: 'BYJU�S',
      },
      {
        name: 'NIHADRI DEKA',
        branch: 'CE',
        year: '2020',
        company: 'LEA ASSOCIATES SOUTH ASIA, PVT. LTD.',
      },
      {
        name: 'JAHANGIR ALAM',
        branch: 'CE',
        year: '2020',
        company: 'L&T, CONSTRUCTION SUB CONTRACTOR ADROIT TECH SERVICES',
      },
      {
        name: 'SABINA YESMIN',
        branch: 'CE',
        year: '2020',
        company: 'PNRD, ASSAM',
      },
      {
        name: 'DRISHTI PATHAK',
        branch: 'CE',
        year: '2020',
        company: 'AKRITI CONSTRUCTION AND MAN POWER SUPPLIERS',
      },
      {
        name: 'JACOB KASHYAP',
        branch: 'CE',
        year: '2020',
        company: 'LAKWA STEEL CONSTRUCTION',
      },
      {
        name: 'ABHISHEK KUMAR LASKAR',
        branch: 'CE',
        year: '2020',
        company: 'PNRD, ASSAM',
      },
      {
        name: 'SWAPNEEL SARMA',
        branch: 'CE',
        year: '2020',
        company: 'JAL JEEVAN MISSION, ASSAM',
      },
      {
        name: 'KASTURI KALITA',
        branch: 'CE',
        year: '2020',
        company: 'JAL JEEVAN MISSION, ASSAM',
      },
      {
        name: 'ARIF MOHAMMAD',
        branch: 'CE',
        year: '2020',
        company: 'MACROCOSM BUILDERS',
      },
      {
        name: 'JABLINSON TIMUNG',
        branch: 'CE',
        year: '2020',
        company: 'PNRD, ASSAM',
      },
      {
        name: 'ARGHYADEEP DAS',
        branch: 'CE',
        year: '2020',
        company: 'PNRD, ASSAM',
      },
      {
        name: 'SAGARIKA GOGOI',
        branch: 'CE',
        year: '2020',
        company: 'JAL JEEVAN MISSION, ASSAM',
      },
      {
        name: 'SUPRIYA BORAH',
        branch: 'CE',
        year: '2020',
        company: 'JAL JEEVAN MISSION, ASSAM',
      },
      {
        name: 'JOSHITA DAS',
        branch: 'CE',
        year: '2020',
        company: 'JAL JEEVAN MISSION, ASSAM',
      },
      {
        name: 'MRIGANKA KUMAR DAS',
        branch: 'CE',
        year: '2020',
        company: 'CENTRAL WATER COMMISSION',
      },
      {
        name: 'MANMEET SINGH',
        branch: 'CE',
        year: '2020',
        company: 'PNRD, ASSAM',
      },
      {
        name: 'PUJA HASAM',
        branch: 'CE',
        year: '2020',
        company: 'NEEPCO, GOVT. OF INDIA',
      },
      {
        name: 'RUPLIN KROPI',
        branch: 'CE',
        year: '2020',
        company: 'OFFICE OF THE MANZA TOWN COMMITTEE',
      },
      {
        name: 'SUNI SONOWAL',
        branch: 'CE',
        year: '2020',
        company: 'CENTRAL WATER COMMISSION',
      },
      {
        name: 'CHINMOY KURMI',
        branch: 'CE',
        year: '2020',
        company: 'CENTRAL WATER COMMISSION',
      },
      {
        name: 'LAKSHYA DEEP MALAKAR',
        branch: 'CE',
        year: '2020',
        company: 'MSME TECHNOLOGY CENTER GUWAHATI',
      },
      {
        name: 'MADHURJYA GOSWAMI',
        branch: 'CE',
        year: '2020',
        company: 'WATER RESOURCE DEPT., GOVT. OF INDIA',
      },
      {
        name: 'SIDDHARTH BORAH',
        branch: 'CE',
        year: '2020',
        company: 'PUBLIC HEALTH ENGG DEPARTMENT, GOVT. OF ASSAM',
      },
      {
        name: 'DARSHANA DEVI',
        branch: 'CE',
        year: '2020',
        company: 'AEGCL, GOVT. OF ASSAM',
      },
      {
        name: 'SUMAN DEBNATH',
        branch: 'CE',
        year: '2020',
        company: 'PUBLIC HEALTH ENGG DEPARTMENT, GOVT. OF ASSAM',
      },
      {
        name: 'POPPY GOHAIN',
        branch: 'CE',
        year: '2020',
        company: 'DIRECTORATE OF INLAND WATER TRANSPORT',
      },
      {
        name: 'BISHAL DUTTA',
        branch: 'CE',
        year: '2020',
        company: 'PUBLIC HEALTH ENGG DEPARTMENT, GOVT. OF ASSAM',
      },
      {
        name: 'ACHYUT DUTTA',
        branch: 'CE',
        year: '2020',
        company: 'OIL INDIA LTD.',
      },
      {
        name: 'QUEEN KONWAR',
        branch: 'CE',
        year: '2020',
        company: 'DIBRUGARH UNIVERSITY',
      },
      {
        name: 'Abhishek Mudoi',
        branch: 'EE',
        year: '2022',
        company: 'BYJUS / IGGL',
      },
      {
        name: 'Abishek Saha',
        branch: 'EE',
        year: '2022',
        company: 'Cognizant',
      },
      {
        name: 'Ankita Kumari',
        branch: 'EE',
        year: '2022',
        company: 'Cognizant / Vedanta Resources',
      },
      {
        name: 'Ariyan Ali',
        branch: 'EE',
        year: '2022',
        company: 'Cognizant / Vedanta Resources',
      },
      {
        name: 'Arpita Sarkar',
        branch: 'EE',
        year: '2022',
        company: 'Cognizant',
      },
      {
        name: 'Bedabrat Talukdar',
        branch: 'EE',
        year: '2022',
        company: 'Cognizant / Dabur',
      },
      {
        name: 'Bharati Bori',
        branch: 'EE',
        year: '2022',
        company: 'KEC',
      },
      {
        name: 'Bhargov Tamuly',
        branch: 'EE',
        year: '2022',
        company: 'ITC Infotech',
      },
      {
        name: 'Bhaskar Jyoti Dutta',
        branch: 'EE',
        year: '2022',
        company: 'Vedanta Resources',
      },
      {
        name: 'Bishal Bhattacharjee',
        branch: 'EE',
        year: '2022',
        company: 'Cognizant',
      },
      {
        name: 'Biswayan Das',
        branch: 'EE',
        year: '2022',
        company: 'Cognizant / Wipro',
      },
      {
        name: 'Dhruba Jyoti Deka',
        branch: 'EE',
        year: '2022',
        company: 'Cognizant / TCS',
      },
      {
        name: 'Jitu Baruah',
        branch: 'EE',
        year: '2022',
        company: 'OIL',
      },
      {
        name: 'Jusmita Mahanta',
        branch: 'EE',
        year: '2022',
        company: 'Vedanta Resources / OIL',
      },
      {
        name: 'Jwngdao Boro',
        branch: 'EE',
        year: '2022',
        company: 'Vedanta Resources',
      },
      {
        name: 'Jyotihmita Sarma',
        branch: 'EE',
        year: '2022',
        company: 'HUL / TCS',
      },
      {
        name: 'Jyotimoy Phukan',
        branch: 'EE',
        year: '2022',
        company: 'Vedanta Resources / OIL',
      },
      {
        name: 'Manas Pratim Goswami',
        branch: 'EE',
        year: '2022',
        company: 'Wipro',
      },
      {
        name: 'Mrigank Mandal',
        branch: 'EE',
        year: '2022',
        company: 'Vedanta Resources',
      },
      {
        name: 'Nabajita Basumatary',
        branch: 'EE',
        year: '2022',
        company: 'Dalmia',
      },
      {
        name: 'Niranjit Singha',
        branch: 'EE',
        year: '2022',
        company: 'Cognizant / Vedanta Resources',
      },
      {
        name: 'Prasanta Jyoti Malakar',
        branch: 'EE',
        year: '2022',
        company: 'Cognizant / Vedanta Resources',
      },
      {
        name: 'Priyakshi Saikia',
        branch: 'EE',
        year: '2022',
        company: 'CAPGEMINI / HUL',
      },
      {
        name: 'Progyan Barah',
        branch: 'EE',
        year: '2022',
        company: 'TCS',
      },
      {
        name: 'Quintan Borah',
        branch: 'EE',
        year: '2022',
        company: 'Vedanta Resources',
      },
      {
        name: 'Ripunjay Kalita',
        branch: 'EE',
        year: '2022',
        company: 'Vedanta Resources',
      },
      {
        name: 'Samyukta Nath',
        branch: 'EE',
        year: '2022',
        company: 'BYJUS',
      },
      {
        name: 'Shadab Haque',
        branch: 'EE',
        year: '2022',
        company: 'Cognizant',
      },
      {
        name: 'Sourabh Jyoti Borah',
        branch: 'EE',
        year: '2022',
        company: 'Vedanta Resources / OIL',
      },
      {
        name: 'Sreeya Dutta',
        branch: 'EE',
        year: '2022',
        company: 'Wipro / Vedanta Resources',
      },
      {
        name: 'Subham Khongia',
        branch: 'EE',
        year: '2022',
        company: 'Wipro',
      },
      {
        name: 'Trisha Rani',
        branch: 'EE',
        year: '2022',
        company: 'Vedanta Resources',
      },
      {
        name: 'Udipta Patwari',
        branch: 'EE',
        year: '2022',
        company: 'Vedanta Resources',
      },
      {
        name: 'Amarjit Saikia',
        branch: 'EE',
        year: '2021',
        company: 'Vedanta Resource Ltd',
      },
      {
        name: 'Anupam Saikia',
        branch: 'EE',
        year: '2021',
        company: 'Vedanta Resource Ltd',
      },
      {
        name: 'Pallab Jyoti Borah',
        branch: 'EE',
        year: '2021',
        company: 'OIL INDIA LTD.',
      },
      {
        name: 'Partha Protim Chetia',
        branch: 'EE',
        year: '2021',
        company: 'Cognizant (GenC)',
      },
      {
        name: 'Saurav Dey',
        branch: 'EE',
        year: '2021',
        company: 'KEC International',
      },
      {
        name: 'Jyotisnata Pathak',
        branch: 'EE',
        year: '2021',
        company: 'HUL',
      },
      {
        name: 'Kritika Saharia',
        branch: 'EE',
        year: '2021',
        company: 'Vedanta Resource Ltd',
      },
      {
        name: 'Meghna Saikia',
        branch: 'EE',
        year: '2021',
        company: 'Vedanta Resource Ltd',
      },
      {
        name: 'Mrigakshi Das',
        branch: 'EE',
        year: '2021',
        company: 'Dalmia Bharat',
      },
      {
        name: 'Priyobrot Das',
        branch: 'EE',
        year: '2021',
        company: 'Numaligarh Refinery Limited',
      },
      {
        name: 'Saurav Dey',
        branch: 'EE',
        year: '2021',
        company: 'KEC International',
      },
      {
        name: 'Ankita Dey',
        branch: 'EE',
        year: '2020',
        company: 'Capgemini',
      },
      {
        name: 'Dibyajyoti Chatterjee',
        branch: 'EE',
        year: '2020',
        company: 'Capgemini',
      },
      {
        name: 'Pooja Rani Borah',
        branch: 'EE',
        year: '2020',
        company: 'Capgemini',
      },
      {
        name: 'Kirti Kamal Saikia',
        branch: 'EE',
        year: '2020',
        company: 'Cognizant',
      },
      {
        name: 'Preetipurna Das',
        branch: 'EE',
        year: '2020',
        company: 'Cognizant',
      },
      {
        name: 'Chandan Chetri',
        branch: 'EE',
        year: '2020',
        company: 'Cognizant',
      },
      {
        name: 'Anshuman Baruah',
        branch: 'EE',
        year: '2020',
        company: 'Cognizant',
      },
      {
        name: 'Diganta Saha',
        branch: 'EE',
        year: '2020',
        company: 'Luit Minerals',
      },
      {
        name: 'Ramen Basumatary',
        branch: 'EE',
        year: '2020',
        company: 'Luit Minerals',
      },
      {
        name: 'Kirti Kamal Saikia',
        branch: 'EE',
        year: '2020',
        company: 'Luit Minerals',
      },
      {
        name: 'Prasanna Joarder',
        branch: 'EE',
        year: '2020',
        company: 'Luit Minerals',
      },
      {
        name: 'Priyanka Devi',
        branch: 'EE',
        year: '2020',
        company: 'Vedanta',
      },
      {
        name: 'Dibyajyoti Chatterjee',
        branch: 'EE',
        year: '2020',
        company: 'Oil India Limited',
      },
      {
        name: 'Javed Mustakin Borbora',
        branch: 'EE',
        year: '2020',
        company: 'Part-time lecturer in Prince of Wales',
      },
      {
        name: 'Mayurdeep Phukan',
        branch: 'EE',
        year: '2020',
        company: 'Assistant Engineer in Irrigation Dept., Govt of Assam',
      },
      {
        name: 'Gourav Deka',
        branch: 'EE',
        year: '2020',
        company: 'Indus Tower Limited',
      },
      {
        name: 'Abhinab Dey',
        branch: 'CSE',
        year: '2022',
        company: 'ITC Infotech',
      },
      {
        name: 'Aditya Prakash Singh',
        branch: 'CSE',
        year: '2022',
        company: 'Vedanta Resources',
      },
      {
        name: 'Akangkshya Pathak',
        branch: 'CSE',
        year: '2022',
        company: 'Vedanta Resources',
      },
      {
        name: 'Ananya Misra',
        branch: 'CSE',
        year: '2022',
        company: 'ITC Infotech',
      },
      {
        name: 'Aniket Kumar Gupta',
        branch: 'CSE',
        year: '2022',
        company: 'ALLEGION',
      },
      {
        name: 'Apeksha Modi',
        branch: 'CSE',
        year: '2022',
        company: 'ALLEGION',
      },
      {
        name: 'Aritra Kaushik',
        branch: 'CSE',
        year: '2022',
        company: 'TCS',
      },
      {
        name: 'Arunabh Borgohain',
        branch: 'CSE',
        year: '2022',
        company: 'Wipro',
      },
      {
        name: 'Barsha Chetri',
        branch: 'CSE',
        year: '2022',
        company: 'Wipro',
      },
      {
        name: 'Bhaskar Jyoti Bhattacharya',
        branch: 'CSE',
        year: '2022',
        company: 'TCS',
      },
      {
        name: 'Bikash Kalita',
        branch: 'CSE',
        year: '2022',
        company: 'ITC Infotech',
      },
      {
        name: 'Biky Mandal',
        branch: 'CSE',
        year: '2022',
        company: 'ITC Infotech',
      },
      {
        name: 'Bishakha Bikhya',
        branch: 'CSE',
        year: '2022',
        company: 'Cognizant',
      },
      {
        name: 'Bivob Bhuyan',
        branch: 'CSE',
        year: '2022',
        company: 'Cognizant',
      },
      {
        name: 'Chandan Boro',
        branch: 'CSE',
        year: '2022',
        company: 'Cognizant',
      },
      {
        name: 'Chandan Kr Gupta',
        branch: 'CSE',
        year: '2022',
        company: 'ITC Infotech',
      },
      {
        name: 'Deepshekhar Dey',
        branch: 'CSE',
        year: '2022',
        company: 'TCS',
      },
      {
        name: 'Himadri Sikhar Gogoi',
        branch: 'CSE',
        year: '2022',
        company: 'Vedanta Resources',
      },
      {
        name: 'Himangshu Das',
        branch: 'CSE',
        year: '2022',
        company: 'ITC Infotech',
      },
      {
        name: 'Himashree Hazarika',
        branch: 'CSE',
        year: '2022',
        company: 'ITC Infotech',
      },
      {
        name: 'Jhumpa Sarma',
        branch: 'CSE',
        year: '2022',
        company: 'TCS',
      },
      {
        name: 'Jyoti Singh',
        branch: 'CSE',
        year: '2022',
        company: 'Vedanta Resources',
      },
      {
        name: 'Jyotirmoy Sarma',
        branch: 'CSE',
        year: '2022',
        company: 'TCS',
      },
      {
        name: 'Mahmudul Hasan',
        branch: 'CSE',
        year: '2022',
        company: 'Cognizant',
      },
      {
        name: 'Manas Jyoti Pachani',
        branch: 'CSE',
        year: '2022',
        company: 'TCS',
      },
      {
        name: 'Masoom Konwar',
        branch: 'CSE',
        year: '2022',
        company: 'Vedanta Resources',
      },
      {
        name: 'N Binish Singha',
        branch: 'CSE',
        year: '2022',
        company: 'Cognizant',
      },
      {
        name: 'Neelav Sarmah',
        branch: 'CSE',
        year: '2022',
        company: 'ITC Infotech',
      },
      {
        name: 'Parishmita Das',
        branch: 'CSE',
        year: '2022',
        company: 'TCS',
      },
      {
        name: 'Priyanka Banik',
        branch: 'CSE',
        year: '2022',
        company: 'TCS',
      },
      {
        name: 'Priyanka Nandy',
        branch: 'CSE',
        year: '2022',
        company: 'Cognizant',
      },
      {
        name: 'Puneet Singh Bhamrah',
        branch: 'CSE',
        year: '2022',
        company: 'CAPGEMINI',
      },
      {
        name: 'Rajlakshmi Gogoi',
        branch: 'CSE',
        year: '2022',
        company: 'Cognizant',
      },
      {
        name: 'Rajlakshmi Gogoi',
        branch: 'CSE',
        year: '2022',
        company: 'Vedanta Resources',
      },
      {
        name: 'Rituraj Pathak',
        branch: 'CSE',
        year: '2022',
        company: 'Cognizant',
      },
      {
        name: 'Ritusman Kashyap Bhuyan',
        branch: 'CSE',
        year: '2022',
        company: 'ITC Infotech',
      },
      {
        name: 'Rohit Das',
        branch: 'CSE',
        year: '2022',
        company: 'TCS',
      },
      {
        name: 'Sanju Kumar Deori',
        branch: 'CSE',
        year: '2022',
        company: 'Wipro',
      },
      {
        name: 'Saurav Majumder',
        branch: 'CSE',
        year: '2022',
        company: 'ITC Infotech',
      },
      {
        name: 'Shubham Bhuyan',
        branch: 'CSE',
        year: '2022',
        company: 'Hexagon',
      },
      {
        name: 'Simanta Das',
        branch: 'CSE',
        year: '2022',
        company: 'Cognizant',
      },
      {
        name: 'Simanta Deka',
        branch: 'CSE',
        year: '2022',
        company: 'Cognizant',
      },
      {
        name: 'Subhasish Bora',
        branch: 'CSE',
        year: '2022',
        company: 'CAPGEMINI',
      },
      {
        name: 'Subhranan Bora',
        branch: 'CSE',
        year: '2022',
        company: 'ALLEGION',
      },
      {
        name: 'Sukonya Phukan',
        branch: 'CSE',
        year: '2022',
        company: 'Vedanta Resources',
      },
      {
        name: 'Sumit Chakraborty',
        branch: 'CSE',
        year: '2022',
        company: 'Hexagon',
      },
      {
        name: 'Utpal Jyoti Nath',
        branch: 'CSE',
        year: '2022',
        company: 'Cognizant',
      },
      {
        name: 'Souvik Baruah',
        branch: 'CSE',
        year: '2022',
        company: 'OIL',
      },
      {
        name: 'Adarsh Jha',
        branch: 'CSE',
        year: '2021',
        company: 'Vedanta Resource Ltd',
      },
      {
        name: 'Afzal Hassan',
        branch: 'CSE',
        year: '2021',
        company: 'Wipro',
      },
      {
        name: 'Akankhya Barman',
        branch: 'CSE',
        year: '2021',
        company: 'Cognizant (GenC)',
      },
      {
        name: 'Alwin Teron',
        branch: 'CSE',
        year: '2021',
        company: 'Margdarshak',
      },
      {
        name: 'Anisha Borah',
        branch: 'CSE',
        year: '2021',
        company: 'TCS NQT',
      },
      {
        name: 'Apurba Nath',
        branch: 'CSE',
        year: '2021',
        company: 'TCS NQT',
      },
      {
        name: 'Arindam Basistha',
        branch: 'CSE',
        year: '2021',
        company: 'TCS CodeVita',
      },
      {
        name: 'Bablu Bhagat',
        branch: 'CSE',
        year: '2021',
        company: 'TCS NQT',
      },
      {
        name: 'Balarka Goswami',
        branch: 'CSE',
        year: '2021',
        company: 'Wipro',
      },
      {
        name: 'Bedashree Kashyap',
        branch: 'CSE',
        year: '2021',
        company: 'Vedanta Resource Ltd',
      },
      {
        name: 'Bobby Rajkhowa',
        branch: 'CSE',
        year: '2021',
        company: 'Vedanta Resource Ltd',
      },
      {
        name: 'Debanshi Neog',
        branch: 'CSE',
        year: '2021',
        company: 'Infosys',
      },
      {
        name: 'Dipam Nath',
        branch: 'CSE',
        year: '2021',
        company: 'Vedanta Resource Ltd',
      },
      {
        name: 'Hrishikesh Saloi',
        branch: 'CSE',
        year: '2021',
        company: 'TCS NQT',
      },
      {
        name: 'Jayant Siktia',
        branch: 'CSE',
        year: '2021',
        company: 'TCS NQT',
      },
      {
        name: 'Kanan Deka',
        branch: 'CSE',
        year: '2021',
        company: 'Cognizant (GenC)',
      },
      {
        name: 'Kibri Ahsan',
        branch: 'CSE',
        year: '2021',
        company: 'Cognizant (GenC)',
      },
      {
        name: 'Mridu Pawan Kuli',
        branch: 'CSE',
        year: '2021',
        company: 'Byju\'s',
      },
      {
        name: 'Munira Nauren Islam',
        branch: 'CSE',
        year: '2021',
        company: 'Wipro',
      },
      {
        name: 'Nishan Boruah',
        branch: 'CSE',
        year: '2021',
        company: 'TCS NQT',
      },
      {
        name: 'Pintu Kumar Sah',
        branch: 'CSE',
        year: '2021',
        company: 'Capgemini',
      },
      {
        name: 'Prabhakar Dutta',
        branch: 'CSE',
        year: '2021',
        company: 'Capgemini',
      },
      {
        name: 'Pradipta Boruah',
        branch: 'CSE',
        year: '2021',
        company: 'Vedanta Resource Ltd',
      },
      {
        name: 'Pratyush Prateem Bhatta',
        branch: 'CSE',
        year: '2021',
        company: 'TCS NQT',
      },
      {
        name: 'Ruparna Saha',
        branch: 'CSE',
        year: '2021',
        company: 'TCS NQT',
      },
      {
        name: 'Sahil Khan',
        branch: 'CSE',
        year: '2021',
        company: 'TCS NQT',
      },
      {
        name: 'Shaima Siddiqua Laskar',
        branch: 'CSE',
        year: '2021',
        company: 'Cognizant (GenC)',
      },
      {
        name: 'Shikhari Baruah',
        branch: 'CSE',
        year: '2021',
        company: 'Cognizant (GenC)',
      },
      {
        name: 'Sriparna Nandi',
        branch: 'CSE',
        year: '2021',
        company: 'TCS NQT',
      },
      {
        name: 'Sweta Jha',
        branch: 'CSE',
        year: '2021',
        company: 'TCS NQT',
      },
      {
        name: 'Tamannaur Aktar Hussain',
        branch: 'CSE',
        year: '2021',
        company: 'Capgemini',
      },
      {
        name: 'Abinash Patowary',
        branch: 'CSE',
        year: '2020',
        company: 'Cognizant',
      },
      {
        name: 'Akashdeep Nandi',
        branch: 'CSE',
        year: '2020',
        company: 'Human Resocia',
      },
      {
        name: 'Ankita Baruah',
        branch: 'CSE',
        year: '2020',
        company: 'Vedanta',
      },
      {
        name: 'Anupal Neog',
        branch: 'CSE',
        year: '2020',
        company: 'Human Resocia',
      },
      {
        name: 'Arya Prakash Kashyap',
        branch: 'CSE',
        year: '2020',
        company: 'TCS',
      },
      {
        name: 'Ayantika Das',
        branch: 'CSE',
        year: '2020',
        company: 'Cognizant',
      },
      {
        name: 'Ayush Sparsha Nath',
        branch: 'CSE',
        year: '2020',
        company: 'Wipro',
      },
      {
        name: 'B. Bharat Reddy',
        branch: 'CSE',
        year: '2020',
        company: 'Human Resocia',
      },
      {
        name: 'Bijeta Sinha',
        branch: 'CSE',
        year: '2020',
        company: 'Cognizant',
      },
      {
        name: 'Binayak Chakraborty',
        branch: 'CSE',
        year: '2020',
        company: 'Capgemini',
      },
      {
        name: 'Harshajyoti Pathak',
        branch: 'CSE',
        year: '2020',
        company: 'TCS',
      },
      {
        name: 'Hindol Bhattacharya',
        branch: 'CSE',
        year: '2020',
        company: 'TCS',
      },
      {
        name: 'Indrajit Sen',
        branch: 'CSE',
        year: '2020',
        company: 'Cognizant',
      },
      {
        name: 'Kritartha Pratim Deka',
        branch: 'CSE',
        year: '2020',
        company: 'TCS',
      },
      {
        name: 'Mayurdeep Pathak',
        branch: 'CSE',
        year: '2020',
        company: 'Human Resocia',
      },
      {
        name: 'Mehuli Das',
        branch: 'CSE',
        year: '2020',
        company: 'Wipro',
      },
      {
        name: 'Mintu Dhadumia',
        branch: 'CSE',
        year: '2020',
        company: 'Wipro',
      },
      {
        name: 'Pankaj Saha',
        branch: 'CSE',
        year: '2020',
        company: 'Human Resocia',
      },
      {
        name: 'Prerona Borkotoky',
        branch: 'CSE',
        year: '2020',
        company: 'Capgemini',
      },
      {
        name: 'Proteeti Saikia',
        branch: 'CSE',
        year: '2020',
        company: 'TCS',
      },
      {
        name: 'Raja Shah',
        branch: 'CSE',
        year: '2020',
        company: 'TCS',
      },
      {
        name: 'Rituraj Mazumdar',
        branch: 'CSE',
        year: '2020',
        company: 'Cognizant',
      },
      {
        name: 'Sajid Iftarul Hussain',
        branch: 'CSE',
        year: '2020',
        company: 'Capgemini',
      },
      {
        name: 'Saurav Biswas',
        branch: 'CSE',
        year: '2020',
        company: 'TCS',
      },
      {
        name: 'Sheetal Agarwal',
        branch: 'CSE',
        year: '2020',
        company: 'Capgemini',
      },
      {
        name: 'Shekhar Dhar',
        branch: 'CSE',
        year: '2020',
        company: 'Nineleaps',
      },
      {
        name: 'Shibangee Ghosh',
        branch: 'CSE',
        year: '2020',
        company: 'TCS',
      },
      {
        name: 'Shubhrojit Paul',
        branch: 'CSE',
        year: '2020',
        company: 'Cognizant',
      },
      {
        name: 'Uddipta Sarma',
        branch: 'CSE',
        year: '2020',
        company: 'TCS',
      },
      {
        name: 'Vinayak Chakraborty',
        branch: 'CSE',
        year: '2020',
        company: 'Oil India Limited',
      },
      {
        name: 'Shyam Prasad',
        branch: 'CSE',
        year: '2019',
        company: 'Wipro',
      },
      {
        name: 'Arijeet Choudhury',
        branch: 'CSE',
        year: '2019',
        company: 'NIT Rourkela',
      },
      {
        name: 'Nishant Saikia',
        branch: 'CSE',
        year: '2019',
        company: 'Load Share',
      },
      {
        name: 'Imdad Hussain Mamud',
        branch: 'CSE',
        year: '2019',
        company: 'Kuhipaat',
      },
      {
        name: 'Sheikh Md Wahiduzzaman',
        branch: 'CSE',
        year: '2019',
        company: 'Concept',
      },
      {
        name: 'Harsh Bagaria',
        branch: 'CSE',
        year: '2019',
        company: 'NIT Culicut',
      },
      {
        name: 'Saumya Jyoti Nath',
        branch: 'CSE',
        year: '2019',
        company: 'Recom Infotech',
      },
      {
        name: 'Sushmita Singh',
        branch: 'CSE',
        year: '2019',
        company: 'TCS',
      },
      {
        name: 'Anjali Sharma',
        branch: 'CSE',
        year: '2019',
        company: 'Knoldus',
      },
      {
        name: 'Abhijit Nath',
        branch: 'CSE',
        year: '2019',
        company: 'Recom Infotech',
      },
      {
        name: 'Diksha Chakravorty',
        branch: 'CSE',
        year: '2019',
        company: 'TCS',
      },
      {
        name: 'Rishav Sharma',
        branch: 'CSE',
        year: '2019',
        company: 'TCS',
      },
      {
        name: 'Ruchika Bhoot',
        branch: 'CSE',
        year: '2019',
        company: 'TCS',
      },
      {
        name: 'Vinay Bhojak',
        branch: 'CSE',
        year: '2019',
        company: 'MNIT Allahabad',
      },
      {
        name: 'Satyajeet Hazarika',
        branch: 'CSE',
        year: '2019',
        company: 'TCS',
      },
      {
        name: 'Kaushik Nath',
        branch: 'CSE',
        year: '2019',
        company: 'Knoldus',
      },
      {
        name: 'R Rohan Kumar Jha',
        branch: 'CSE',
        year: '2019',
        company: 'Infosys',
      },
      {
        name: 'Sagar Kashyap',
        branch: 'CSE',
        year: '2019',
        company: 'IIT Hyderabad',
      },
      {
        name: 'Sayeda Mousumee Alam Basit',
        branch: 'CSE',
        year: '2019',
        company: 'Katerra',
      },
      {
        name: 'Abhilash Kashyap',
        branch: 'CSE',
        year: '2019',
        company: 'Raman Bytes',
      },
      {
        name: 'Himanshi Ginoria',
        branch: 'CSE',
        year: '2019',
        company: 'Infosys',
      },
      {
        name: 'Swadeshi Parasar',
        branch: 'CSE',
        year: '2019',
        company: 'Cognizant',
      },
      {
        name: 'Kritideep Kaur',
        branch: 'CSE',
        year: '2019',
        company: 'Vedanta',
      },
      {
        name: 'Poonam Bordoloi',
        branch: 'CSE',
        year: '2019',
        company: 'TCS',
      },
      {
        name: 'Pritam Goswami',
        branch: 'CSE',
        year: '2019',
        company: 'TCS',
      },
      {
        name: 'Rajdeep Paul',
        branch: 'CSE',
        year: '2019',
        company: 'Recom Infotech',
      },
      {
        name: 'Uddipta Ranjan Kakoti',
        branch: 'CSE',
        year: '2019',
        company: 'Raman Bytes',
      },
      {
        name: 'Amitabh Baruah',
        branch: 'CSE',
        year: '2019',
        company: 'IITG',
      },
      {
        name: 'Ankhuman Jyoti Neog',
        branch: 'CSE',
        year: '2019',
        company: 'Vedanta',
      },
      {
        name: 'Manas Pratim Kalita',
        branch: 'CSE',
        year: '2019',
        company: 'Recom Infotech',
      },
      {
        name: 'Mamata Barman',
        branch: 'CSE',
        year: '2019',
        company: 'Capgemini',
      },
      {
        name: 'Kritika Saikia',
        branch: 'CSE',
        year: '2019',
        company: 'Infosys',
      },
      {
        name: 'Pankaj Kumar Singha',
        branch: 'CSE',
        year: '2019',
        company: 'Subex',
      },
      {
        name: 'Puspa Nath Choudhury',
        branch: 'CSE',
        year: '2019',
        company: 'Wipro',
      },
      {
        name: 'Pallabi Borah',
        branch: 'CSE',
        year: '2019',
        company: 'TCS',
      },
      {
        name: 'Digvijay Rajkhowa',
        branch: 'CSE',
        year: '2019',
        company: 'Zaloni',
      },
      {
        name: 'Dipankar Das',
        branch: 'CSE',
        year: '2019',
        company: 'NIT Meghalaya',
      },
      {
        name: 'Devajeet Bharali',
        branch: 'CSE',
        year: '2019',
        company: 'Neosalpha',
      },
      {
        name: 'Garbeet Saraswat',
        branch: 'CSE',
        year: '2019',
        company: 'TCS',
      },
      {
        name: 'Pinku Swargiary',
        branch: 'CSE',
        year: '2019',
        company: 'Knoldus',
      },
      {
        name: 'Peenaz Akhtar',
        branch: 'CSE',
        year: '2019',
        company: 'Mindtree',
      },
      {
        name: 'Deepika Prasad',
        branch: 'CSE',
        year: '2018',
        company: 'Automovill',
      },
      {
        name: 'Sangeet Dey',
        branch: 'CSE',
        year: '2018',
        company: 'PG-Animation',
      },
      {
        name: 'Gurharsh Singh Bhamrah',
        branch: 'CSE',
        year: '2018',
        company: 'Conversion Bug',
      },
      {
        name: 'Indranee Kashyap',
        branch: 'CSE',
        year: '2018',
        company: 'Conversion Bug, IIITG',
      },
      {
        name: 'Deepak Sharma',
        branch: 'CSE',
        year: '2018',
        company: 'Cognizant',
      },
      {
        name: 'Nandita Das',
        branch: 'CSE',
        year: '2018',
        company: 'IIEST',
      },
      {
        name: 'Abhinaba Hazarika',
        branch: 'CSE',
        year: '2018',
        company: 'Vantage, Conversion Bug',
      },
      {
        name: 'Bikiran Sarma',
        branch: 'CSE',
        year: '2018',
        company: 'Ethnus',
      },
      {
        name: 'Joydeep Sarkar',
        branch: 'CSE',
        year: '2018',
        company: 'Probit Technologies',
      },
      {
        name: 'Uddeepta Saikia',
        branch: 'CSE',
        year: '2018',
        company: 'Spirent ALP',
      },
      {
        name: 'Shilpi Dey',
        branch: 'CSE',
        year: '2018',
        company: 'Automovill, TCS',
      },
      {
        name: 'Sagar Pratim Talukdar',
        branch: 'CSE',
        year: '2018',
        company: 'APDCL, TCS',
      },
      {
        name: 'Kunal Patowary',
        branch: 'CSE',
        year: '2018',
        company: 'Gratia Technology',
      },
      {
        name: 'Bijit Goswami',
        branch: 'CSE',
        year: '2018',
        company: 'NIT Rourkela',
      },
      {
        name: 'Kamal Hachan Ahmad',
        branch: 'CSE',
        year: '2018',
        company: 'Automovill',
      },
      {
        name: 'Pallabi Hazarika',
        branch: 'CSE',
        year: '2018',
        company: 'NIT Suratkal, Ethnis',
      },
      {
        name: 'Deepajun Dasgupta',
        branch: 'CSE',
        year: '2018',
        company: 'NIT Calicut',
      },
      {
        name: 'Biswadeep Baruah',
        branch: 'CSE',
        year: '2018',
        company: 'University of Hyderabad',
      },
      {
        name: 'Dhiman Das',
        branch: 'CSE',
        year: '2018',
        company: 'Appointment Master',
      },
      {
        name: 'Bunty Sah',
        branch: 'CSE',
        year: '2018',
        company: 'Wipro, Ethnus',
      },
      {
        name: 'Karishma Shaheen',
        branch: 'CSE',
        year: '2018',
        company: 'Cognizant',
      },
      {
        name: 'Badruj Jaman Laskar',
        branch: 'CSE',
        year: '2018',
        company: 'Ethnus',
      },
      {
        name: 'Arunav Saikia',
        branch: 'CSE',
        year: '2018',
        company: 'IIT Guwahati',
      },
      {
        name: 'Ankuran Deka',
        branch: 'CSE',
        year: '2018',
        company: 'GSG',
      },
      {
        name: 'Madhab Sharma',
        branch: 'CSE',
        year: '2018',
        company: 'NIT Rourkela',
      },
      {
        name: 'Manoj Sarma',
        branch: 'CSE',
        year: '2018',
        company: 'NEHU',
      },
      {
        name: 'Bandana Saud',
        branch: 'CSE',
        year: '2018',
        company: 'Conversion Bug, GMC',
      },
      {
        name: 'Priyanka Kasera',
        branch: 'CSE',
        year: '2018',
        company: 'TCS',
      },
      {
        name: 'Prithwish Sen',
        branch: 'CSE',
        year: '2018',
        company: 'Aspire Vision',
      },
      {
        name: 'Harshita Bhilwara',
        branch: 'CSE',
        year: '2017',
        company: 'NIT Kurukshetra',
      },
      {
        name: 'Supriya Datta',
        branch: 'CSE',
        year: '2017',
        company: 'IIT Bombay',
      },
      {
        name: 'Abani Das',
        branch: 'CSE',
        year: '2017',
        company: 'ASTT Project Engineer',
      },
      {
        name: 'Poulamee Dey',
        branch: 'CSE',
        year: '2017',
        company: 'Zaloni',
      },
      {
        name: 'Bitopan Kalita',
        branch: 'CSE',
        year: '2017',
        company: 'IIT Guwahati',
      },
      {
        name: 'Chayanjeeta Kakoti',
        branch: 'CSE',
        year: '2017',
        company: 'Infosys',
      },
      {
        name: 'Dhritiman Nath',
        branch: 'CSE',
        year: '2017',
        company: 'Conversion Bug',
      },
      {
        name: 'Antara Deb',
        branch: 'CSE',
        year: '2017',
        company: 'Huawei',
      },
      {
        name: 'Partha Pratim Bhattacharjya',
        branch: 'CSE',
        year: '2017',
        company: 'Wipro',
      },
      {
        name: 'Nabarun Gogoi',
        branch: 'CSE',
        year: '2017',
        company: 'Conversion Bug',
      },
      {
        name: 'Arunav Goswami',
        branch: 'CSE',
        year: '2017',
        company: 'Govt of Assam',
      },
      {
        name: 'Dhruba Kalita',
        branch: 'CSE',
        year: '2017',
        company: 'SIQES',
      },
      {
        name: 'Bidipta Duaka',
        branch: 'CSE',
        year: '2017',
        company: 'Conversion Bug',
      },
      {
        name: 'Kelvin Basumatary',
        branch: 'CSE',
        year: '2017',
        company: 'IIM Sirmaur',
      },
      {
        name: 'Dipanka Sarmah',
        branch: 'CSE',
        year: '2017',
        company: 'Meghalaya Basin Dev Authority',
      },
      {
        name: 'Niloy Baruah',
        branch: 'CSE',
        year: '2017',
        company: 'IAS Academy',
      },
      {
        name: 'Nishita Thakur',
        branch: 'CSE',
        year: '2017',
        company: 'Kaiserslautern',
      },
      {
        name: 'Kuljit Singh',
        branch: 'CSE',
        year: '2017',
        company: 'Montblue Tech Pvt Ltd',
      },
      {
        name: 'Jyoti Sagar Talukdar',
        branch: 'CSE',
        year: '2017',
        company: 'IIM Nagpur',
      },
      {
        name: 'Sayan Paul',
        branch: 'CSE',
        year: '2017',
        company: 'SIQES',
      },
      {
        name: 'Sai Bikalpa',
        branch: 'CSE',
        year: '2017',
        company: 'TCS',
      },
      {
        name: 'Prandeep Deka',
        branch: 'CSE',
        year: '2017',
        company: 'Zanagan News',
      },
      {
        name: 'Bijoy Kumar Jaiswal',
        branch: 'CSE',
        year: '2017',
        company: 'CGI',
      },
      {
        name: 'Aminul Hussain',
        branch: 'CSE',
        year: '2017',
        company: 'Meghalaya Basin Dev Authority',
      },
      {
        name: 'Sukanya Lahkar',
        branch: 'CSE',
        year: '2017',
        company: 'Tech Mahindra',
      },
      {
        name: 'Himanka Boruah',
        branch: 'CSE',
        year: '2017',
        company: 'Tech Mahindra',
      },
      {
        name: 'Rahul Kumar',
        branch: 'CSE',
        year: '2017',
        company: 'Infosys',
      },
      {
        name: 'Jaspreet Kaur Bhamrah',
        branch: 'CSE',
        year: '2017',
        company: 'Tech Mahindra',
      },
      {
        name: 'Sanjuraj Brahma',
        branch: 'CSE',
        year: '2017',
        company: 'NIT Jalandhar',
      },
      {
        name: 'Anindita Deuri',
        branch: 'CSE',
        year: '2017',
        company: 'Govt of Assam',
      },
      {
        name: 'Arnab Das',
        branch: 'CSE',
        year: '2017',
        company: 'Tech Mahindra & Publicis Sapient',
      },
      {
        name: 'Lakhya Jyoti Konwar',
        branch: 'CSE',
        year: '2017',
        company: 'Elmech Inst of Techn',
      },
      {
        name: 'Sarphu Rangpi',
        branch: 'CSE',
        year: '2017',
        company: 'Conversion Bug',
      },
      {
        name: 'Rupam Sarmah',
        branch: 'CSE',
        year: '2017',
        company: 'NERIST',
      },
      {
        name: 'Bhaskar Jyoti Deka',
        branch: 'CSE',
        year: '2017',
        company: 'IGNOU',
      },
      {
        name: 'Sangita Barman',
        branch: 'CSE',
        year: '2017',
        company: 'GU',
      },
      {
        name: 'Santanu Chakraborty',
        branch: 'CSE',
        year: '2017',
        company: 'Aura Emanating Tech Pvt Ltd',
      },
      {
        name: 'Anjelika Kalita',
        branch: 'IE',
        year: '2022',
        company: 'HUL',
      },
      {
        name: 'Anubhav Barooah',
        branch: 'IE',
        year: '2022',
        company: 'Cognizant',
      },
      {
        name: 'Arindam Hazarika',
        branch: 'IE',
        year: '2022',
        company: 'Cognizant',
      },
      {
        name: 'Bidisha Baruah',
        branch: 'IE',
        year: '2022',
        company: 'OIL',
      },
      {
        name: 'Jubarraj Baruah',
        branch: 'IE',
        year: '2022',
        company: 'Cognizant',
      },
      {
        name: 'Malaika Gogoi',
        branch: 'IE',
        year: '2022',
        company: 'HUL',
      },
      {
        name: 'Nishita Borah',
        branch: 'IE',
        year: '2022',
        company: 'TCS',
      },
      {
        name: 'Soumen Bhattacharjee',
        branch: 'IE',
        year: '2022',
        company: 'NRL',
      },
      {
        name: 'Shrabana Talukdar',
        branch: 'IE',
        year: '2022',
        company: 'OIL',
      },
      {
        name: 'Pritam Kr Singh',
        branch: 'IE',
        year: '2022',
        company: 'Analyser Instrument Company Pvt. Ltd',
      },
      {
        name: 'Dimbo Pegu',
        branch: 'IE',
        year: '2022',
        company: '.WYREFLOW',
      },
      {
        name: 'Manthan Chettri',
        branch: 'IE',
        year: '2022',
        company: 'Brigosha Technologies',
      },
      {
        name: 'Mr Biswajit Roy',
        branch: 'IE',
        year: '2021',
        company: 'TCS',
      },
      {
        name: 'Ms Anannya Saikia',
        branch: 'IE',
        year: '2021',
        company: 'CTS',
      },
      {
        name: 'Mr Niranjan Kumar Singh',
        branch: 'IE',
        year: '2021',
        company: 'Infosys',
      },
      {
        name: 'Mr Pabitra Saikia',
        branch: 'IE',
        year: '2021',
        company: 'Freshworks Tech Ltd',
      },
      {
        name: 'Mr Neeraj Saikia',
        branch: 'IE',
        year: '2021',
        company: 'IGGL',
      },
      {
        name: 'Ms Thockcham Manita',
        branch: 'IE',
        year: '2021',
        company: 'IGGL',
      },
      {
        name: 'Ms Pratiksha Das',
        branch: 'IE',
        year: '2021',
        company: 'Planet Spark',
      },
      {
        name: 'Mr Krishna Kanta Patir',
        branch: 'IE',
        year: '2021',
        company: 'Sub-inspector (ab) in Assam police Commando Battalion',
      },
      {
        name: 'Ms Isha Rani Das',
        branch: 'IE',
        year: '2021',
        company: 'M Tech in NIT Silchar with valid GATE score',
      },
      {
        name: 'Mr Nitish Kumar Borah',
        branch: 'IE',
        year: '2021',
        company: 'M Tech in NIT Silchar',
      },
      {
        name: 'Mr Amit Das',
        branch: 'IE',
        year: '2021',
        company: 'PGDM program with valid MAT score',
      },
      {
        name: 'Mr Debasish Sarmah',
        branch: 'IE',
        year: '2020',
        company: 'OIL India Ltd',
      },
      {
        name: 'Mr Anupam Hatibaruah',
        branch: 'IE',
        year: '2020',
        company: 'OIL India Ltd',
      },
      {
        name: 'Ms Munmi Bharali',
        branch: 'IE',
        year: '2020',
        company: 'ONGC Ltd',
      },
      {
        name: 'Mr Prandip Bora',
        branch: 'IE',
        year: '2020',
        company: 'Bora Brothers, Agriculture related Farm',
      },
    ],
  },
];

const branchFullForm = {
  CE: 'Civil Engineering',
  ME: 'Mechanical Engineering',
  EE: 'Electrical Engineering',
  ECE: 'Electronics and Communication Engineering',
  CSE: 'Computer Science and Engineering',
};

function getSortedRows(rows) {
  return [...rows].sort((a, b) => a.name.localeCompare(b.name));
}

function getBranchSections(rows) {
  const sectionsByBranch = new Map();

  rows.forEach((row) => {
    if (!sectionsByBranch.has(row.branch)) {
      sectionsByBranch.set(row.branch, []);
    }
    sectionsByBranch.get(row.branch).push(row);
  });

  return [...sectionsByBranch.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([branch, branchRows]) => ({ branch, rows: branchRows }));
}

function JecPlacements() {
  const totalCount = useMemo(
    () => placementsByCollege.reduce((sum, college) => sum + college.rows.length, 0),
    []
  );
  const [animatedCount, setAnimatedCount] = useState(0);

  useEffect(() => {
    let frameId;
    const durationMs = 1200;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / durationMs, 1);
      setAnimatedCount(Math.floor(progress * totalCount));
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setAnimatedCount(totalCount);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [totalCount]);

  return (
    <main
      style={{
        minHeight: 'calc(100vh - 52px)',
        padding: '24px 16px 48px',
        background:
          'radial-gradient(1000px 460px at -5% -10%, rgba(14,165,233,0.20), transparent 60%), radial-gradient(950px 460px at 105% -10%, rgba(59,130,246,0.18), transparent 58%), linear-gradient(180deg, #f8fbff 0%, #f4f8ff 45%, #f8fafc 100%)',
      }}
    >
      <style>{`
        .placements-shell {
          width: 100%;
          margin: 0 auto;
        }

        .placements-hero {
          border: 1px solid rgba(148, 163, 184, 0.26);
          border-radius: 20px;
          background: linear-gradient(145deg, rgba(255,255,255,0.92), rgba(248,251,255,0.92));
          backdrop-filter: blur(6px);
          box-shadow: 0 22px 42px -32px rgba(30, 41, 59, 0.65);
          padding: 18px 18px 16px;
          margin-bottom: 18px;
        }

        .hero-top {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 12px;
        }

        .placements-hero h1 {
          margin: 0;
          color: #0f172a;
          font-size: clamp(24px, 4vw, 36px);
          letter-spacing: -0.02em;
          text-align: left;
        }

        .placements-hero p {
          margin: 8px 0 0;
          color: #475569;
          font-size: 14px;
          font-weight: 500;
          text-align: left;
        }

        .hero-count {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid #bfdbfe;
          background: #eff6ff;
          color: #1d4ed8;
          font-size: 26px;
          font-weight: 800;
          line-height: 1;
          white-space: nowrap;
          margin-left: auto;
        }

        @media (max-width: 760px) {
          .hero-top {
            flex-direction: column;
            align-items: flex-start;
          }

          .hero-count {
            margin-left: 0;
            font-size: 20px;
          }
        }

        .branch-section {
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.88);
          box-shadow: 0 18px 36px -30px rgba(15, 23, 42, 0.55);
          padding: 14px;
          margin-bottom: 16px;
        }

        .branch-title {
          margin: 0;
          color: #1d4ed8;
          font-size: clamp(18px, 2.2vw, 26px);
          text-align: center;
        }

        .branch-meta {
          text-align: center;
          margin: 8px 0 14px;
          color: #334155;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .placements-grid {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 12px;
        }

        .placement-card {
          position: relative;
          overflow: hidden;
          border: 1px solid #dbeafe;
          border-radius: 12px;
          background: linear-gradient(180deg, #ffffff 0%, #f6faff 100%);
          padding: 10px 10px 12px;
          min-height: 132px;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          opacity: 0;
          transform: translateY(14px);
          animation: cardFadeSlideUp 560ms ease forwards;
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }

        .placement-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url('/logo.png');
          background-repeat: no-repeat;
          background-position: center;
          background-size: 110px;
          opacity: 0.08;
          pointer-events: none;
        }

        .placement-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 24px -20px rgba(30, 64, 175, 0.75);
          border-color: #93c5fd;
        }

        .placement-name {
          position: relative;
          z-index: 1;
          margin: 0;
          color: #0f172a;
          font-size: 14px;
          font-weight: 800;
          line-height: 1.3;
        }

        .placement-company {
          position: relative;
          z-index: 1;
          margin: 8px 0 0;
          color: #334155;
          font-size: 12px;
          line-height: 1.4;
        }

        .placement-year {
          position: relative;
          z-index: 1;
          margin: 10px 0 0;
          color: #1d4ed8;
          font-size: 12px;
          font-weight: 800;
        }

        @media (max-width: 1400px) {
          .placements-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        @media (max-width: 980px) {
          .placements-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .placements-grid {
            grid-template-columns: 1fr;
          }
        }

        @keyframes cardFadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <section className="placements-shell">
        <header className="placements-hero">
          <div className="hero-top">
            <div>
              <h1>Engineering Placements</h1>
              <p>Category: Colleges</p>
            </div>
            <div className="hero-count">Total Placements: {animatedCount}</div>
          </div>
        </header>

        {placementsByCollege.map((collegeSection) =>
          getBranchSections(collegeSection.rows).map((branchSection) => (
            <div key={`${collegeSection.college}-${branchSection.branch}`} className="branch-section">
              <h2 className="branch-title">
                {collegeSection.college} - {branchFullForm[branchSection.branch] || branchSection.branch}
              </h2>
              <p className="branch-meta">{branchSection.rows.length} records</p>
              <div className="placements-grid">
                {getSortedRows(branchSection.rows).map((row, index) => (
                  <article
                    key={`${row.name}-${row.branch}-${row.year}-${index}`}
                    className="placement-card"
                    style={{ animationDelay: `${(index % 18) * 35}ms` }}
                  >
                    <p className="placement-name">{row.name}</p>
                    <p className="placement-company">{row.company}</p>
                    <p className="placement-year">Year: {row.year}</p>
                  </article>
                ))}
              </div>
            </div>
          ))
        )}
      </section>
    </main>
  );
}

export default JecPlacements;

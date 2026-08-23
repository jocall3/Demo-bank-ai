// data/corporateCards.ts

// This is the armory, a comprehensive registry of the tools of corporate expenditure.
// Each entry is a `CorporateCard` issued to an employee, complete with its own set of
// permissions, limits, and statuses. This is not a small list; it is a robust and
// extensive catalog designed to simulate a real, thriving enterprise. This rich dataset
// is the absolute bedrock of the Corporate Command Center, allowing for complex
// demonstrations of card management, control, and oversight. It is the source of
// the finance manager's power.

import type { CorporateCard } from '../types';

/**
 * @description An extensive list of mock corporate cards issued to various employees.
 * This data is central to the `CorporateCommandView` and its sub-views for card
 * management. Each card has a unique ID, holder name, status, and a detailed set
 * of controls (e.g., spending limits, feature toggles), allowing for a rich and
* realistic simulation of a corporate card program.
 */
export const MOCK_CORPORATE_CARDS: CorporateCard[] = [
    { id: 'corp1', holderName: 'Alex Chen (Engineer)', cardNumberMask: '8431', status: 'Active', frozen: false, controls: { atm: true, contactless: true, online: true, monthlyLimit: 5000 } },
    { id: 'corp2', holderName: 'Brenda Rodriguez (Sales)', cardNumberMask: '5549', status: 'Active', frozen: false, controls: { atm: false, contactless: true, online: true, monthlyLimit: 10000 } },
    { id: 'corp3', holderName: 'Charles Davis (Marketing)', cardNumberMask: '1127', status: 'Suspended', frozen: true, controls: { atm: false, contactless: false, online: false, monthlyLimit: 2500 } },
    { id: 'corp4', holderName: 'Diana Wells (Operations)', cardNumberMask: '9882', status: 'Active', frozen: false, controls: { atm: true, contactless: true, online: false, monthlyLimit: 7500 } },
    { id: 'corp5', holderName: 'Ethan Gonzalez (HR)', cardNumberMask: '3019', status: 'Active', frozen: false, controls: { atm: true, contactless: true, online: true, monthlyLimit: 4000 } },
    { id: 'corp6', holderName: 'Fiona Kim (Product)', cardNumberMask: '7442', status: 'Active', frozen: false, controls: { atm: true, contactless: true, online: true, monthlyLimit: 6000 } },
    { id: 'corp7', holderName: 'George Patel (Legal)', cardNumberMask: '8821', status: 'Lost', frozen: true, controls: { atm: false, contactless: false, online: false, monthlyLimit: 3000 } },
    { id: 'corp8', holderName: 'Hannah Nguyen (Support)', cardNumberMask: '5096', status: 'Active', frozen: false, controls: { atm: false, contactless: true, online: true, monthlyLimit: 2000 } },
    { id: 'corp9', holderName: 'Ian Washington (Executive)', cardNumberMask: '1558', status: 'Active', frozen: false, controls: { atm: true, contactless: true, online: true, monthlyLimit: 20000 } },
    { id: 'corp10', holderName: 'Jasmine Lee (Data Science)', cardNumberMask: '4337', status: 'Active', frozen: false, controls: { atm: true, contactless: true, online: true, monthlyLimit: 8000 } },
];

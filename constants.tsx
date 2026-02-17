
import { Product, Condition, RepairType } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    model: '15 Pro Max',
    storage: '256GB',
    color: 'Natural Titanium',
    price: 18500,
    condition: Condition.NEW,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1waOtFbYJ5Nc31AOV5TbkfvChuBqs9MyRlPN_68v7ZyDl2emrC4qGfuEUXWltG_qis8ChvdTC1qVE5pRshpsBJQHem8HQi2P1JC5txS5jbqXDtMRNcAl9HTw6h89AZ0VK9VhgMtaBE6SyY4FoLAacJjME8_j6ytkIEL00bImPtpFTPixq3SwUMwLo8EJYSNU9efa_GfnqnNLDSyVXRDcwqUf_qAoUGzgSNlbhs3cHlNtT74dVvF5Df0UjPy2t67X4nhQFseIQg3Ao',
    description: 'The latest flagship from Apple with Titanium build.',
    warranty: '12 Months',
    isFeatured: true
  },
  {
    id: '2',
    name: 'iPhone 13',
    model: '13',
    storage: '128GB',
    color: 'Sierra Blue',
    price: 7200,
    condition: Condition.USED,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgIiidwg0fDT21WkL7-DnOLXdyaifcc7H2x9A6DRBXQBFoIR-Hb62xheShLJv2My9lfaYUOI0TzsRs1tEKUHninQK_91JAxJEQiGW1pe-gQv5_UT7oGpufN7guLCM_UcsuD_uQSgCiZVjlyQfz3YNfgRxtBcsOe2l3Qk8IFOiHS9K2LlU56eLt5546Ef4kMjQNDv2ubeUrWI3pcGjANkBFhKgNNKiWA1C2lrIeHXeITHZuVQm72kjUWimQtl04qw6bgbUCAY6up3yH',
    description: 'Pre-owned iPhone 13 in excellent condition.',
    warranty: '6 Months',
    batteryHealth: 92,
    isFeatured: true
  },
  {
    id: '3',
    name: 'iPhone 14',
    model: '14',
    storage: '128GB',
    color: 'Purple',
    price: 8200,
    condition: Condition.USED,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCubaqN0te1wCngRrfF1sRPqkL_R_YUS0hWDJ7Iyxcar3RtOObE6RdvwAS4HcLLZLa0junkMRI0QHrTLJnhBXiDhblpGhrV997kKKNvzlLliyKISB2iR9eRWSlycNk1cTHxs7Ebm2SBjcT7CI9w3u-VZA4I_2VZ7MkzcPR_Hduv8KtZH4wvgV87XmP-PKAd8P2s2VAg6IhZ0XifVW1dZrWSTQjUhyQWXFAj_2HtPfaaMaTtTtBEMLC-DW-6VfWoQ46ZhX3r5dnbnf7f',
    description: 'Perfectly maintained pre-owned device.',
    warranty: '6 Months',
    batteryHealth: 98
  }
];

export const REPAIR_TYPES: RepairType[] = [
  {
    id: 'r1',
    name: 'Screen Repair',
    icon: 'phonelink_erase',
    estimatedPrice: 1450,
    duration: '45-60 Mins',
    warranty: '6 Months'
  },
  {
    id: 'r2',
    name: 'Battery',
    icon: 'battery_charging_full',
    estimatedPrice: 550,
    duration: '30 Mins',
    warranty: '3 Months'
  },
  {
    id: 'r3',
    name: 'Camera',
    icon: 'photo_camera',
    estimatedPrice: 450,
    duration: '45 Mins',
    warranty: '6 Months'
  },
  {
    id: 'r4',
    name: 'Water Damage',
    icon: 'water_drop',
    estimatedPrice: 380,
    duration: '1 Hour',
    warranty: '1 Month'
  }
];

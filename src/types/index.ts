export interface Participant {
  email: string // normalized: lowercase, trimmed
  share: number // interpretation depends on shareType
}

export type ShareType = 'equal' | 'percentage' | 'exact' | 'shares'

// Account payment for tracking split payments across accounts
export interface AccountPayment {
  accountId: string
  amount: number
}

export interface ExpenseRecord {
  uuid: string // randomly generated, survives edits
  title: string
  description: string
  category: string
  amount: number
  currency: string // ISO 4217 (INR, USD, EUR)
  date: string // ISO date YYYY-MM-DD
  time: string // ISO time HH:MM
  icon: string // emoji
  paidBy: Participant[]
  paidFor: Participant[]
  shareType: ShareType
  groupId: string | null
  accounts?: AccountPayment[] // optional: which accounts were used with amounts (supports split payments)
  comments: string // verbose details, AI extraction notes
  sourceHash?: string // for bank statement dedup: `${filename}:${hash}`
  createdAt: number // timestamp ms
  updatedAt: number // timestamp ms
}

export interface User {
  email: string // primary identifier, normalized
  alias: string // display name
}

export interface Group {
  uuid: string
  name: string
  members: string[] // emails
  isDefault?: boolean // true for the built-in default group
  createdAt: number
  updatedAt: number
}

// Default group constant UUID
export const DEFAULT_GROUP_UUID = 'default-group'

export type Theme = 'light' | 'dark' | 'system'

// Available Claude models
// Available OpenRouter models
export type ClaudeModel =
  | 'google/gemini-2.5-flash'
  | 'openai/gpt-4o-mini'
  | 'anthropic/claude-3.5-sonnet'
  | 'deepseek/deepseek-chat-v3'

export const CLAUDE_MODELS: { id: ClaudeModel; name: string; description: string }[] = [
  {
    id: 'openai/gpt-4o-mini',
    name: 'GPT-4o Mini',
    description: 'Balanced & reliable',
  },
  {
    id: 'anthropic/claude-3.5-sonnet',
    name: 'Claude 3.5 Sonnet',
    description: 'Best reasoning',
  },
  {
  id: 'google/gemini-2.5-flash',
  name: 'Gemini 2.5 Flash',
  description: 'Fastest & cheapest',
},
]

export const DEFAULT_CLAUDE_MODEL: ClaudeModel =
  'google/gemini-2.5-flash'


export interface Settings {
  key: string // 'main' - single row key
  claudeApiKey?: string // stored locally
  claudeModel?: ClaudeModel // selected AI model
  autoApplyAiChanges: boolean // default: false
  enableAiMemory: boolean // default: true - store AI interaction summary
  aiUserSummary?: string // brief summary of user preferences and interaction patterns
  lastUsedCurrency: string // ISO 4217
  defaultDisplayCurrency: string // ISO 4217 - for dashboard balance display
  currentUserEmail?: string // email of the current user ("me")
  theme: Theme // default: 'system'
  defaultAccountId?: string // default account for new expenses
  onboardingComplete?: boolean // whether user has completed onboarding
}

// Exchange rates storage
export interface ExchangeRates {
  key: string // 'rates' - single row key
  baseCurrency: string // base currency (EUR for Frankfurter API)
  rates: Record<string, number> // currency code -> rate relative to base
  fetchedAt: number // timestamp ms when rates were fetched
}

// Category for expense classification
export interface Category {
  id: string // unique identifier
  name: string // display name
  icon: string // emoji icon
  isSystem: boolean // true for predefined categories, false for custom
}

// Account for tracking money source (user-defined)
export interface Account {
  id: string // unique identifier
  name: string // display name (e.g., "Cash", "HDFC Bank", "Wallet")
  icon: string // emoji icon
  createdAt: number // timestamp ms
}

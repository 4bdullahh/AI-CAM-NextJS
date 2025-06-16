
export interface ViolationLogs{
    violation: string,
    confidence: string,
    date: string,
    time: string,
    description: string
}

export interface ViolationMessage{
    violations: ViolationLogs[]
}
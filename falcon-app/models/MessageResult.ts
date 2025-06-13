
export interface PredictionsDTO {
  confidence: number
  violation: string
  violation_id: number
  detection_id: number
  width: number
  height: number
  x: number
  y: number 
}

export interface PersonDTO {
  violation_list: PredictionsDTO[]
}

export interface MessageResult{
    violations: PersonDTO[],
}


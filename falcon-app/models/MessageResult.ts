
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
  person: PredictionsDTO
  violations: PredictionsDTO[]
}

export interface MessageResult{
    person_detected: PersonDTO[],
}


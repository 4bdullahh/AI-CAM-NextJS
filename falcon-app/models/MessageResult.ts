
export interface PredictionsDTO {
  violation_id: number
  violation: string
  confidence: number
  detection_id: number
  resCode: number
}

export interface MessageResult{
    violations: PredictionsDTO[],
    output_image: string
}


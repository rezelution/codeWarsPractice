function getGrade (s1, s2, s3) {
const gradeResults = (s1 + s2 + s3) / 3;
​
if(gradeResults <= 100 && gradeResults >= 90) {
  return "A"
} else if (gradeResults < 90 && gradeResults >= 80) {
  return "B"
} else if (gradeResults < 80 && gradeResults >= 70) {
  return "C"
} else if(gradeResults < 70 && gradeResults >=60) {
  return "D"
} else {
  return "F"
}
}
​
​
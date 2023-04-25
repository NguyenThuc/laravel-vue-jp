const mixed = {
  default: ({ label }) => `${label ? `${label}には` : ''}正しい値を入力してください`,
  required: ({ label }) => `${label ? `${label}を` : ''}入力してください。`,
  oneOf: ({ label, values }) => `${label ? `${label}には` : ''}${values}のいずれかを入力してください`,
  notOneOf: ({ label, values }) => `${label ? `${label}には` : ''}${values}以外のものを入力してください`,
  // From user's perspective, defined and default is essentially same.
  defined: ({ label }) => `${label ? `${label}を` : ''}入力してください。`,
};
// NOTE: @types/yup currently missing `string.uuid` field definition.
const string = {
  length: ({ label, length }) => `${label ? `${label}は` : ''}${length}文字で入力してください`,
  min: ({ label, min }) => `${label ? `${label}は` : ''}${min}文字以上入力してください`,
  max: ({ label, max }) => `${label ? `${label}は` : ''}${max}文字以下にしてください`,
  matches: ({ label, regex }) => `${label ? `${label}は` : ''}以下の形式で入力してください: ${regex}`,
  email: ({ label }) => `${label ? `${label}には` : ''}正しいメールアドレスを入力してください`,
  url: ({ label }) => `${label ? `${label}には` : ''}正しいURLを入力してください`,
  uuid: ({ label }) => `${label ? `${label}には` : ''}正しいUUIDを入力してください`,
  trim: ({ label }) => `${label ? `${label}の` : ''}前後の空白を取り除いてください`,
  lowercase: ({ label }) => `${label ? `${label}には` : ''}小文字のみ入力してください`,
  uppercase: ({ label }) => `${label ? `${label}には` : ''}大文字のみ入力してください`,
};
// NOTE: @types/yup currently missing `string.notEqual` field definition.
const number = {
  min: ({ label, min }) => `${label ? `${label}は` : ''}${min}以上にしてください`,
  max: ({ label, max }) => `${label ? `${label}は` : ''}${max}以下にしてください`,
  lessThan: ({ label, less }) => `${label ? `${label}は` : ''}${less}未満にしてください`,
  moreThan: ({ label, more }) => `${label ? `${label}は` : ''}${more}より大きい数にしてください`,
  notEqual: ({ label, notEqual }) => `${label ? `${label}は` : ''}${notEqual}以外の数にしてください`,
  positive: ({ label }) => `${label ? `${label}は` : ''}正の数にしてください`,
  negative: ({ label }) => `${label ? `${label}は` : ''}負の数にしてください`,
  integer: ({ label }) => `${label ? `${label}には` : ''}整数を入力してください`,
};
// To format date, use the second argument of yup.date().min/max.
const date = {
  min: ({ label, min }) => `${label ? `${label}には` : ''}${min}以降の日付を入力してください`,
  max: ({ label, max }) => `${label ? `${label}には` : ''}${max}以前の日付を入力してください`,
};
const object = {
  // There is no way to describe `noUnknown` message in suggestive way, right?
  noUnknown: ({ label, unknown }) => `${label ? `${label}には` : ''}登録されていないキーは入力できません${unknown ? `: ${unknown}` : ''}`,
};
const array = {
  min: ({ label, min }) => `${label ? `${label}は` : ''}${min}つ以上入力してください`,
  max: ({ label, max }) => `${label ? `${label}は` : ''}${max}つ以下にしてください`,
};

export default {
  mixed,
  string,
  number,
  date,
  object,
  array,
};

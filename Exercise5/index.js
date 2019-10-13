function is_array (val) {
  if (Array.isArray(val)) {
    return true;
  } else {
    return false;
  }
}

console.log(is_array([]));
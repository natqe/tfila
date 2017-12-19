<?php
// function sort_fetches_by_created_at_datetime(array $multi_dimensional_array, $colomn_to_sort_by = 'created_at', $new_first = true){
//     usort($multi_dimensional_array, function($a, $b) {
//         if ($a[$colomn_to_sort_by ?? 'created_at'] == $b[$colomn_to_sort_by ?? 'created_at']) return 0;
//         if ($new_first ?? true) {
//             return ($a[$colomn_to_sort_by ?? 'created_at'] < $b[$colomn_to_sort_by ?? 'created_at']) ? 1: -1;
//         } else {
//             return ($a[$colomn_to_sort_by ?? 'created_at'] < $b[$colomn_to_sort_by ?? 'created_at']) ? -1 : 1;
//         }
//     });
// }
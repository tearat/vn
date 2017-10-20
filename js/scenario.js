// register images
var girl = "img/girl.png";
var dijkstra = "img/dijkstra.png";
var frame01 = "img/frame01.png";

var texts = [
    {name: "Некочан", text: "Привет!", pic_1: girl},
    {name: "Некочан", text: "Сегодня я расскажу тебе кое-что про алгоритмы", pic_1: girl},
    {name: "Некочан", text: "И первым из них будет алгоритм Дейкстры", pic_1: girl, pos_1: "left", pic_2: dijkstra, pos_2: "right"},
    {name: "Некочан", text: "Он находит кратчайшие пути от одной из вершин графа до всех остальных. Алгоритм работает только для графов без рёбер отрицательного веса. Алгоритм широко применяется в программировании.", pic_1: girl, pos_1: "left", effect_1: "fadein", pic_2: dijkstra, pos_2: "right", effect_2: "fadein"},
    {name: "Некочан", text: "А теперь я исчезаю, чтобы ты мог лучше рассмотреть его принцип", pic_1: girl, effect_1: "fadeout", pic_2: dijkstra, pos_2: "left", effect_2: "fadeout"},
    {name: "Некочан", text: "Вжух!", pic_2: frame01, pos_2: "left", effect_2: "fadein"},
]
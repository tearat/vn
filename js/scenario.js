// register images
var sprite = "img/man.png";
var hole = "img/hole.png";
var holebig = "img/holebig.png";

var texts = [
    {name: "Некочан", text: "Привет!", pic_1: sprite},
    {name: "Некочан", text: "Сегодня я расскажу тебе кое-что про алгоритмы", pic_1: sprite},
    {name: "Некочан", text: "И первым из них будет алгоритм Дейкстры", pic_1: sprite, pos_1: "left", pic_2: hole, pos_2: "right"},
    {name: "Некочан", text: "Он находит кратчайшие пути от одной из вершин графа до всех остальных. Алгоритм работает только для графов без рёбер отрицательного веса. Алгоритм широко применяется в программировании.", pic_1: sprite, pos_1: "left", pic_2: hole, pos_2: "right"},
    {name: "Некочан", text: "А теперь я исчезаю, чтобы ты мог лучше рассмотреть его принцип", pic_1: sprite, effect_1: "fadeout", pic_2: hole, pos_2: "left", effect_2: "fadeout",},
    {name: "Некочан", text: "Вжух!", pic_2: holebig, pos_2: "left", effect_2: "fadein"},
]
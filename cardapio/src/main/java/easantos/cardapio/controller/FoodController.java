package easantos.cardapio.controller;

import easantos.cardapio.food.Food;
import easantos.cardapio.food.FoodRepository;
import easantos.cardapio.food.FoodRequestDTO;
import easantos.cardapio.food.FoodResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("food")
public class FoodController {

    @Autowired
    private FoodRepository foodRepository;


    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveFooD(@RequestBody FoodRequestDTO data){
        Food fooddata  = new Food(data);
        foodRepository.save(fooddata);
        return;
    }
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<FoodResponseDTO> getAll(){

        List<FoodResponseDTO> foodList = foodRepository.findAll().stream().map(FoodResponseDTO::new).toList();
        return foodList;

    }

}

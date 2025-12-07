---
layout: subpage
permalink: /reviews/hidden_calibration
title: "Review for 'Token-based Decision Criteria Are Suboptimal in In-context Learning' @ ACL ARR 2024 October"
---

# Review for "Token-based Decision Criteria Are Suboptimal in In-context Learning" @ ACL ARR 2024 October

## Meta Review of Submission1221 by Area Chair FXeL

**Meta Review**  
This paper proposes a new strategy for in-context learning. The idea is to use the final-token hidden states of in-context examples to create one cluster for each label. The test example can then be mapped to the closest cluster centroid to perform classification. The results show that this outperforms other methods like batch calibration that all rely on the token probabilities instead of hidden states.

The reviewers are generally in agreement that the method is simple and effective, the experiments are thorough, and the paper is well-written. One reviewer raised some concerns about novelty, which I think are not serious. The reviewers have identified a weakness in the method's need for additional data, but the paper does contain some analysis of data efficiency and the authors will further strengthen that section by including vanilla ICL with different numbers of examples.

**Summary Of Reasons To Publish:**  
- Simple yet intuitive idea for improving in-context learning
- Experiments show good improvement over a variety of baselines on many datasets and models
- Thorough analysis
- Well written

**Summary Of Suggested Revisions:**  
- More discussion of the data efficiency issue would help
- The reviewers have provided good low-level suggestions that should be incorporated
- In addition to the baselines described in the paper, I believe this paper is quite relevant https://arxiv.org/pdf/2406.13131 they also use a slightly larger number of demonstrations to calibrate ICL by looking at the internals of the model

**Overall Assessment:** 4 = There are minor points that may be revised  
**Suggested Venues:** NAACL  
**Best Paper Ae:** No  
**Ethical Concerns:**  
There are no concerns with this submission  
**Needs Ethics Review:** No  
**Author Identity Guess:** 1 = I do not have even an educated guess about author identity.  
**Great Reviews:** bczJ  
**Reported Issues:** No  

## Official Review of Submission1221 by Reviewer GQYa

**Paper Summary:**  
The paper identified the problem of potential bias brought by the output tokens (e.g., positive/negative) for classifications in the decoding process of LLMs when prompted to perform In-context Learning (ICL). By introducing Hidden Calibration (HC), a clustering method over the last-layer hidden states of LLMs, the authors presented a more effective decision boundary for classification. The authors then empirically tested the method across various dataset&LLM combinations, which demonstrated improvements over several calibration methods. Additionally, the author conducted analysis to show the hidden states of LLMs are linearly separable under certain conditions, and that clustering produce a more robust decision boundary.

**Summary Of Strengths:**  
- The paper is well-written and easy to follow. Particularly, the figures in the paper make it easy for the readers to follow the idea across different sections.
- The effectiveness of the method is tested under various settings and are shown to be robust.
- The analysis section of the paper provides an interpretable way of understanding the underlying mechanism of classification in the latent space, which is insightful for future studies.

**Summary Of Weaknesses:**  
- The proposed method lacks novelty and is very similar to probing, which essentially trains a predictor on hidden states of LLMs. Although briefly discussed in the paper (Line 532), there are no empirical studies on the trade-off between efficiency and performance across different probing methods, despite being very relevant.
- The effectiveness of the proposed method is undermined by the fact that there is a training process that require more annotated data. Specifically, HC needs k*m demonstrations to complete the training process. In contrast, vanilla ICL only use k demonstrations and not all baseline calibration methods require extra annotated data, which means Figure 4 does not necessarily show a fair comparison.

**Comments Suggestions And Typos:**  
- Line 323: highest baseline → strongest baseline
- Line 500: For clustering algorithms, a larger inter-class averaged centroid distance should be more favorable. Is the diminishing pattern of the curve showing a negative sign here?

**Confidence:** 5 = Positive that my evaluation is correct. I read the paper very carefully and am familiar with related work.  
**Soundness:** 3.5  
**Overall Assessment:** 2.5  
**Best Paper:** No  
**Ethical Concerns:**  
There are no concerns with this submission

**Needs Ethics Review:** No  
**Reproducibility:** 4 = They could mostly reproduce the results, but there may be some variation because of sample variance or minor variations in their interpretation of the protocol or method.  
**Datasets:** 1 = No usable datasets submitted.  
**Software:** 1 = No usable software released.  
**Knowledge Of Or Educated Guess At Author Identity:** No  
**Knowledge Of Paper:** N/A, I do not know anything about the paper from outside sources  
**Knowledge Of Paper Source:** N/A, I do not know anything about the paper from outside sources  
**Impact Of Knowledge Of Paper:** N/A, I do not know anything about the paper from outside sources  
**Reviewer Certification:** I certify that the review I entered accurately reflects my assessment of the work. If you used any type of automated tool to help you craft your review, I hereby certify that its use was restricted to improving grammar and style, and the substance of the review is either my own work or the work of an acknowledged secondary reviewer.

## Official Review of Submission1221 by Reviewer 9JGc

**Paper Summary:**  
The paper proposes a simple yet effective calibration method for ICL on classification tasks by focusing on the last hidden state of the last tokens in the query. Specifically, it calculates the centroid of the hidden states for each label using a calibration set offline. It assigns a test example to the label with the closest centroid for the hidden state at inference. The papers show their methods outperform previous methods across 10 classification datasets. The paper includes a detailed analysis of the time/data efficiency of their methods and demonstrates the robustness of their methods by varying important aspects of ICL, such as # demonstrations, the ordering of examples, etc. The papers also include a detailed analysis of the constraints of previous calibration methods along with the side evidence of the effectiveness of their methods.

**Summary Of Strengths:**  
- The paper is reasonably well written and easy to understand.
- The improvement in their experimental setting is significant on a good enough number of datasets.
- The additional analysis and discussions are nearly comprehensive, making the proposed method convincing.

**Summary Of Weaknesses:**  
- The authors should consider experimenting with more 1 model on 1 dataset on the section "Prompting Complexity".
- The trends on datasets with more than 4 labels can be completely different for ICL, as the nature of your method and the baseline methods can make them very sensitive to # labels. More experiments or some discussion about that should be added to the paper.

**Comments Suggestions And Typos:**  
I am aware that there are comparisons of data efficiency included in the paper already, but I would still suggest the authors compare their methods against the baseline methods, like in Figure 4, but with the x-axis being the # total used data samples. It is still important to show directly the improvement of the methods controlling the data efficiency besides the current time efficiency.

**Confidence:** 5 = Positive that my evaluation is correct. I read the paper very carefully and am familiar with related work.  
**Soundness:** 3.5  
**Overall Assessment:** 3.5  
**Best Paper:** No  
**Ethical Concerns:**  
There are no concerns with this submission

**Needs Ethics Review:** No  
**Reproducibility:** 5 = They could easily reproduce the results.  
**Datasets:** 1 = No usable datasets submitted.  
**Software:** 1 = No usable software released.  
**Knowledge Of Or Educated Guess At Author Identity:** No  
**Knowledge Of Paper:** Before the review process  
**Knowledge Of Paper Source:** other (specify)  
**Knowledge Of Paper Source Other:** Reviewed in previous cycle.  
**Impact Of Knowledge Of Paper:** Not much  
**Reviewer Certification:** I certify that the review I entered accurately reflects my assessment of the work. If you used any type of automated tool to help you craft your review, I hereby certify that its use was restricted to improving grammar and style, and the substance of the review is either my own work or the work of an acknowledged secondary reviewer.

## Official Review of Submission1221 by Reviewer bczJ

**Paper Summary:**
This paper proposes a novel few-shot learning method using LLMs. They suggest constructing the decision boundary directly in the hidden representation space of the model before un-embedding instead of the probability space after softmax. Specifically, during the learning phase, they (1) encode each of the calibration examples with some in-context examples and then (2) find the centroid of each class's representations. During the inference time, they encode the test sample in the same way and choose the class whose centroid is closest to it as the prediction.

They show that

1. Their approach outperforms existing methods.
2. Their approach is robust to different prompts, label distributions, and demonstration order.

They also conduct analyses:

1. The overlap of the distributions of samples of different labels in the hidden space.
2. The intra-class standard deviation and inter-class centroid distance.

**Summary Of Strengths:**  
1. This work conducts comprehensive analyses on how learning the decision boundary in the probability space is less optimal than learning the decision boundary in the hidden representation space before un-embedding.
2. They show that their calibration methods consistently outperform baseline methods on several tasks and models.
3. They show their approach's robustness to different numbers of few-shot examples (from 1 to 128), prompt templates, label distribution in demonstrations, demonstration orders.
4. They show how the distributions of the hidden states of samples of different labels overlap less when there are more demonstration samples.
5. They also measure the intra-class standard deviation and inter-class centroid distance.

**Summary Of Weaknesses:**  
I do not see major issues in this paper. There are some issues that are relatively minor:

**High-level comments**

1. In the introduction, the authors state that "However, some practices have pointed out that randomly changing label spaces doesn’t critically influence ICL performance (Min et al., 2022c; Wei et al., 2023), which means the selected label subspaces are trivial and arbitrary. (line 56)". I don't think it's an appropriate way to motivate the proposed approach, because even though the verbalizer can be selected randomly, the mapping between the verbalizers and the labels usually need to be consistent for all ICL examples to achieve better performance. Also, I think for smaller models, using task-specific verbalizers still leads to better performance.
2. The analyses in Section 5 do not bring many useful insights.
    1. The analysis in Section 5.1 shows the higher separability of hidden states of samples of different labels, which is cool, however, does not seem more informative than accuracy, as it is half of the lower bound of the error rate. Inspecting how far the error your approach has from the lower bound may make this part more insightful.
    2. I am not sure whether Section 5.2 provides some useful takeaway. In particular, I am curious why the inter-class centroid distance decreases when there are more examples. It seems to contradict the observation in Section 5.1 that the classes are more separable when there are more in-context examples?
   
**Clarity Issue**

While the clarity has been improved a lot compared to the previous version (especially for the main methodology part), there are still parts that are somewhat confusing, mostly in the analysis sections.

1. Line 423: "map the prompts into the difference of classification probabilities across these two labels by the calibration method to be investigated." I think what you mean is you project the samples' hidden state to the normal vector of the decision boundary formed by the calibration method?
2. Figure 11: I don't know what "hidden state convergence" really means.
3. Also the plot legends are way too small for all the figures. The axis text should be larger too.
4. Line 492: "intra-class cohesive dynamics" saying that "the hidden distribution of samples in the same class becomes more concentrated" may be easier to understand. Or "clustering trend" would be better in my opinion.
5. Line 160: "decoding subspace" "un-embedding subspace" would be more specific.
6. Line 72: "mapping subspace" not sure what you mean.
 
**Comments Suggestions And Typos:**  
Why does the inter-class centroid distance decrease when there are more examples. It seems to contradict the observation in Section 5.1 that the classes are more separable when there are more in-context examples?

**Confidence:** 4 = Quite sure. I tried to check the important points carefully. It's unlikely, though conceivable, that I missed something that should affect my ratings.  
**Soundness:** 4 = Strong: This study provides sufficient support for all of its claims/arguments. Some extra experiments could be nice, but not essential.  
**Overall Assessment:** 3.5  
**Best Paper:** No  
**Ethical Concerns:**  
There are no concerns with this submission

**Reproducibility:** 4 = They could mostly reproduce the results, but there may be some variation because of sample variance or minor variations in their interpretation of the protocol or method.  
**Datasets:** 1 = No usable datasets submitted.  
**Software:** 1 = No usable software released.  
**Knowledge Of Or Educated Guess At Author Identity:** No  
**Knowledge Of Paper:** N/A, I do not know anything about the paper from outside sources  
**Knowledge Of Paper Source:** N/A, I do not know anything about the paper from outside sources  
**Impact Of Knowledge Of Paper:** N/A, I do not know anything about the paper from outside sources  
**Reviewer Certification:** I certify that the review I entered accurately reflects my assessment of the work. If you used any type of automated tool to help you craft your review, I hereby certify that its use was restricted to improving grammar and style, and the substance of the review is either my own work or the work of an acknowledged secondary reviewer.